import { useState } from 'react'
import InterviewHeader from '../../components/InterviewHeader';
import MainLayout from '../../MainLayout';
import InterviewCandidatesInvite from './InterviewCandidatesInvite';
import InterviewTestCases from './InterviewTestCases';

const InterviewerHomepage = () => {
    const options = {
        1: "Candidates",
        2: "Tests",
        3: "Interviews",
    };

    // const a = Object.keys(options).map((key) =>{
    //     console.log(options[key]); // Prints : Candidate, Tests, Interviews
    // })

    // Converts the Objects into Array
    const links = Object.keys(options).map((key) => ({
        name: options[key],
        href: `${options[key].toLowerCase()}`, //"candidates", "#tests"
    }));


    const [selectedTab, setSelectedTab] = useState(options[1])

    const renderContent = () => {
        switch (selectedTab) {
            case 'Candidates':
                return <InterviewCandidatesInvite />
            case 'Tests':
                return <InterviewTestCases />
            case 'Interviews':
                return <div>Displaying Interviews</div>;
            default:
                return null;
        }
    };


    return (


        <MainLayout navlinks={links} selectedTab={selectedTab} onTabSelect={setSelectedTab}>
            {renderContent()}
        </MainLayout>



    )
}

export default InterviewerHomepage