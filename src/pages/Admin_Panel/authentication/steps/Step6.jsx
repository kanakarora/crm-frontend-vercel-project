import { FaGraduationCap, FaTasks, FaBriefcase } from 'react-icons/fa';
import { MdDone } from "react-icons/md";
import { useFormContext} from '../../../../Context/AuthContext';
import { useSearchParams} from 'react-router-dom';



function Step6() {
  const [searchParams,setSearchParams] = useSearchParams();
  const { nextStep,extraInfo, updateExtraInfo ,adminInfo} = useFormContext();
  const email = searchParams.get('email');

  const handlePackageSelection = (selectedPackageId) => {
    console.log(selectedPackageId);
  updateExtraInfo({package_id:selectedPackageId})
    nextStep();
    setSearchParams({ step: 7, email: email });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-white text-3xl mb-6">Tell us who you are to customize your Flowchanger Workspace</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {/* Student card */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <FaGraduationCap className="text-purple-500 text-4xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">I'm a student</h2>
          <p className="text-gray-500 mb-4">For education purposes only</p>
          <ul className="list-none text-left space-y-2">
            <li className='flex items-start'><MdDone className='h-5 w-5 mr-2 flex-shrink-0'/> Schedule your classes</li>
            <li className='flex items-start'><MdDone className='h-5 w-5 mr-2 flex-shrink-0'/> Prepare for exams with structured study plans</li>
            <li className='flex items-start'><MdDone className='h-5 w-5 mr-2 flex-shrink-0'/> Set reminders for assignments and tests</li>
            <li className='flex items-start'><MdDone className='h-5 w-5 mr-2 flex-shrink-0'/>Track your daily progress</li>
          </ul>
          <button 
            onClick={() => handlePackageSelection(1)} // Pass numeric package ID
            className="mt-auto bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-purple-600 w-[100%]">
            Choose
          </button>
        </div>

        {/* Personal Tasks Card */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <FaTasks className="text-purple-500 text-4xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">I will use Bordio for organizing personal tasks</h2>
          <p className="text-gray-500 mb-4">Non-commercial use only</p>
          <ul className="list-none text-left space-y-2">
            <li className='flex items-start'><MdDone className='h-5 w-5 mr-2 flex-shrink-0'/> <span>Organize your personal tasks</span></li>
            <li className='flex items-start'><MdDone className='h-5 w-5 mr-2 flex-shrink-0'/> <span>Plan personal events, like birthdays or vacations</span> </li>
            <li className='flex items-start'><MdDone className='h-5 w-5 mr-2 flex-shrink-0'/> <span>Set repeats for recurring activities</span></li>
            <li className='flex items-start'><MdDone className='h-5 w-5 mr-2 flex-shrink-0'/> <span>Organize personal projects</span></li>
          </ul>
          <button 
            onClick={() => handlePackageSelection(2)} 
            className="mt-auto bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-purple-600 w-[100%]">
            Choose
          </button>
        </div>

        {/* Business Card */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <FaBriefcase className="text-purple-500 text-4xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">I represent a business or organization</h2>
          <p className="text-gray-500 mb-4">Free 14 days trial</p>
          <ul className="list-none text-left space-y-2">
            <li className='flex items-start'><MdDone className='h-5 w-5 mr-2 flex-shrink-0'/> Invite colleagues to the teams and projects</li>
            <li className='flex items-start'><MdDone className='h-5 w-5 mr-2 flex-shrink-0'/> Assign tasks to your teammates, set deadlines and track the progress</li>
            <li className='flex items-start'><MdDone className='h-5 w-5 mr-2 flex-shrink-0'/> Switch between views: Calendar planner, Kanban board, Task list</li>
            <li className='flex items-start'><MdDone className='h-5 w-5 mr-2 flex-shrink-0'/> Discuss tasks in real-time chat</li>
          </ul>
          <button 
            onClick={() => handlePackageSelection(3)}
            className="mt-auto bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-purple-600 w-[100%]">
            Choose
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step6;
