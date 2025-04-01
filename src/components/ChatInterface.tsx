
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

// Type definitions
type MessageType = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
};

type GradeType = {
  subject: string;
  grade: string;
};

// Helper function to generate a unique ID
const generateId = () => Math.random().toString(36).substring(2, 10);

// Grade conversion data
const gradePoints: Record<string, number> = {
  'A': 12, 'A-': 11, 'B+': 10, 'B': 9, 'B-': 8, 
  'C+': 7, 'C': 6, 'C-': 5, 'D+': 4, 'D': 3, 
  'D-': 2, 'E': 1
};

const ChatInterface = () => {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: generateId(),
      content: "Hello! I'm your Grade Navigator assistant. I can help you explore educational options based on your KCSE grades. Would you like to enter your grades and get personalized advice?",
      sender: 'bot',
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [userGrades, setUserGrades] = useState<GradeType[]>([]);
  const [currentStage, setCurrentStage] = useState('intro'); // intro, collecting-grades, analyzing, advice
  const [waitingForGradeSubject, setWaitingForGradeSubject] = useState(false);
  const [currentSubject, setCurrentSubject] = useState('');
  const [totalPoints, setTotalPoints] = useState(0);
  const [meanGrade, setMeanGrade] = useState('');
  
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Helper function to send a bot message with delay
  const sendBotMessage = (content: string, delay = 1000) => {
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: generateId(),
          content,
          sender: 'bot',
        },
      ]);
    }, delay);
  };

  // Helper function to calculate mean grade
  const calculateMeanGrade = (points: number, subjects: number): string => {
    const meanPoint = points / subjects;
    
    if (meanPoint >= 11.5) return 'A';
    if (meanPoint >= 10.5) return 'A-';
    if (meanPoint >= 9.5) return 'B+';
    if (meanPoint >= 8.5) return 'B';
    if (meanPoint >= 7.5) return 'B-';
    if (meanPoint >= 6.5) return 'C+';
    if (meanPoint >= 5.5) return 'C';
    if (meanPoint >= 4.5) return 'C-';
    if (meanPoint >= 3.5) return 'D+';
    if (meanPoint >= 2.5) return 'D';
    if (meanPoint >= 1.5) return 'D-';
    return 'E';
  };

  // Process the user's message
  const processUserMessage = (message: string) => {
    // Add user message to chat
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: generateId(),
        content: message,
        sender: 'user',
      },
    ]);

    // Process based on current stage
    if (currentStage === 'intro') {
      if (message.toLowerCase().includes('yes') || message.toLowerCase().includes('ok') || message.toLowerCase().includes('sure')) {
        sendBotMessage("Great! Let's get started. Please tell me which subjects you took in your KCSE. You can list them all at once, or I can ask you one by one.");
        setCurrentStage('collecting-grades');
      } else {
        sendBotMessage("I'm here to help when you're ready. Just let me know when you'd like to explore your educational options based on your KCSE grades.");
      }
    } 
    else if (currentStage === 'collecting-grades') {
      if (waitingForGradeSubject) {
        if (!message.trim()) {
          sendBotMessage("I didn't catch that. Could you please provide the grade for " + currentSubject + " (like A, B+, C-, etc.)?");
          return;
        }
        
        // Validate grade
        const grade = message.trim().toUpperCase();
        if (!Object.keys(gradePoints).includes(grade)) {
          sendBotMessage("That doesn't seem to be a valid Kenyan grade. Please provide a grade like A, B+, C-, D, E, etc.");
          return;
        }
        
        // Add grade
        const newGrade: GradeType = {
          subject: currentSubject,
          grade: grade
        };
        
        setUserGrades([...userGrades, newGrade]);
        
        // Calculate running total
        setTotalPoints(totalPoints + gradePoints[grade]);
        
        sendBotMessage(`Got it! ${currentSubject}: ${grade}. What other subject did you take? (or type "done" if you've entered all your subjects)`);
        setWaitingForGradeSubject(false);
      } 
      else {
        if (message.toLowerCase() === 'done') {
          if (userGrades.length < 1) {
            sendBotMessage("You need to enter at least one subject before we can continue. What subject did you take in your KCSE?");
            return;
          }
          
          // Calculate mean grade
          const calculatedMeanGrade = calculateMeanGrade(totalPoints, userGrades.length);
          setMeanGrade(calculatedMeanGrade);
          
          // Show summary
          let summaryMessage = "Here's a summary of your grades:\n\n";
          userGrades.forEach((g) => {
            summaryMessage += `${g.subject}: ${g.grade}\n`;
          });
          summaryMessage += `\nBased on these ${userGrades.length} subjects, your mean grade is: ${calculatedMeanGrade}`;
          
          sendBotMessage(summaryMessage);
          
          // Transition to advice stage
          setTimeout(() => {
            setCurrentStage('advice');
            provideAdvice(calculatedMeanGrade);
          }, 2000);
          
        } else {
          // Assume this is a subject
          setCurrentSubject(message.trim());
          setWaitingForGradeSubject(true);
          sendBotMessage(`What grade did you get in ${message.trim()}? (A, B+, C-, etc.)`);
        }
      }
    }
    else if (currentStage === 'advice') {
      // Handle conversation in the advice stage
      if (message.toLowerCase().includes('financial') || 
          message.toLowerCase().includes('money') || 
          message.toLowerCase().includes('fees') || 
          message.toLowerCase().includes('afford')) {
        sendBotMessage(`I understand financial concerns can be challenging. Here are some options to consider:
        
1. Government scholarships and bursaries - The Higher Education Loans Board (HELB) offers loans to students.
2. University scholarships - Many universities offer merit-based scholarships.
3. Corporate scholarships - Companies like Equity Bank, KCB, and Safaricom have scholarship programs.
4. International scholarships - Organizations like Mastercard Foundation offer scholarships for African students.
5. Part-time studies - Consider working while studying part-time to manage costs.

Would you like more information on any of these options?`);
      }
      else if (message.toLowerCase().includes('fail') || 
               message.toLowerCase().includes('failed') || 
               message.toLowerCase().includes('low grades') ||
               message.toLowerCase().includes('didn\'t do well')) {
        sendBotMessage(`Even if your grades weren't what you hoped for, there are still many paths to success:

1. TVET institutions offer practical courses in various fields.
2. Consider retaking the KCSE exam to improve your grades.
3. Certificate and diploma courses have lower grade requirements.
4. Entrepreneurship doesn't always require traditional education.
5. Online courses and self-learning can help you build skills.

Remember, many successful people didn't excel in traditional education. What interests you most?`);
      }
      else if (message.toLowerCase().includes('thank')) {
        sendBotMessage("You're welcome! I'm here to help whenever you need guidance about your educational journey. Feel free to come back if you have more questions or want to explore other options. I believe in your potential to succeed!");
      }
      else {
        sendBotMessage("I'm here to guide you based on your specific situation. Could you tell me more about what aspects of your educational journey you're most concerned about right now? For example, are you wondering about specific courses, financial options, or alternative paths?");
      }
    }
    
    // Clear input
    setInputMessage('');
  };

  // Provide advice based on mean grade
  const provideAdvice = (grade: string) => {
    let adviceMessage = "";
    
    if (['A', 'A-', 'B+'].includes(grade)) {
      adviceMessage = `Congratulations on your excellent performance! With a mean grade of ${grade}, you qualify for:
      
1. Direct university admission through KUCCPS for competitive courses like Medicine, Engineering, Law, and Architecture
2. Scholarships opportunities both locally and internationally
3. Prestigious programs like actuarial science, computer science, and aviation

Would you like to discuss specific course options or universities? Or do you have concerns about financing your education?`;
    }
    else if (['B', 'B-', 'C+'].includes(grade)) {
      adviceMessage = `Good job on your KCSE results! With a mean grade of ${grade}, you have several good options:
      
1. University admission through KUCCPS for many bachelor's degree programs
2. Diploma programs at technical institutions which can later be upgraded to degrees
3. Teacher training colleges and nursing schools
4. Certificate programs in various technical fields

Are you interested in a particular field of study? Or do you have concerns about financing your education?`;
    }
    else if (['C', 'C-'].includes(grade)) {
      adviceMessage = `With your mean grade of ${grade}, you have several pathways to consider:
      
1. Diploma programs at technical colleges and polytechnics
2. Certificate courses in various vocational fields
3. Some teacher training programs
4. Upgrading options through bridging courses
5. Entrepreneurship and skill-based training

Would you like to explore specific career paths that match these educational options? Or do you have financial concerns?`;
    }
    else {
      adviceMessage = `Thank you for sharing your results. With your current mean grade of ${grade}, you still have valuable options:
      
1. Artisan and craft certificate courses at TVET institutions
2. Vocational training programs in practical skills
3. Retaking the KCSE exam if you wish to improve your grades
4. Entrepreneurship and business skills training
5. Online courses and self-learning options

Remember that academic grades don't define your potential for success. Many successful people have found alternative paths. Would you like to discuss specific options that match your interests?`;
    }
    
    sendBotMessage(adviceMessage);
  };

  // Handle input form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    processUserMessage(inputMessage);
  };

  // Quick response buttons based on stage
  const renderQuickResponses = () => {
    if (currentStage === 'intro') {
      return (
        <div className="flex flex-wrap gap-2 mt-4">
          <Button variant="outline" onClick={() => {
            setInputMessage("Yes, I'd like to enter my grades");
            processUserMessage("Yes, I'd like to enter my grades");
          }}>
            Yes, enter grades
          </Button>
          <Button variant="outline" onClick={() => {
            setInputMessage("Tell me more about this system");
            processUserMessage("Tell me more about this system");
          }}>
            Tell me more
          </Button>
        </div>
      );
    }
    else if (currentStage === 'advice') {
      return (
        <div className="flex flex-wrap gap-2 mt-4">
          <Button variant="outline" onClick={() => {
            setInputMessage("I have financial concerns");
            processUserMessage("I have financial concerns");
          }}>
            Financial concerns
          </Button>
          <Button variant="outline" onClick={() => {
            setInputMessage("What if my grades are too low?");
            processUserMessage("What if my grades are too low?");
          }}>
            Low grades options
          </Button>
          <Button variant="outline" onClick={() => {
            setInputMessage("Thank you for the guidance");
            processUserMessage("Thank you for the guidance");
          }}>
            Thank you
          </Button>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="flex flex-col h-[600px] w-full max-w-4xl mx-auto">
      <div className="p-4 border-b bg-edu-blue text-white">
        <h2 className="text-xl font-bold">Grade Navigator Assistant</h2>
        <p className="text-sm">Get personalized guidance based on your KCSE results</p>
      </div>
      
      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 flex flex-col space-y-4"
        style={{ scrollBehavior: 'smooth' }}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`chat-bubble ${
              message.sender === 'user' ? 'chat-bubble-user animate-slide-in' : 'chat-bubble-bot animate-fade-in'
            }`}
          >
            {message.content.split('\n').map((text, i) => (
              <React.Fragment key={i}>
                {text}
                {i < message.content.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t bg-gray-50">
        {renderQuickResponses()}
        
        <form onSubmit={handleSubmit} className="flex items-center space-x-2 mt-2">
          <Input
            type="text"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" disabled={!inputMessage.trim()}>Send</Button>
        </form>
      </div>
    </Card>
  );
};

export default ChatInterface;
