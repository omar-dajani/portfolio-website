import Container from 'react-bootstrap/Container';
import WorkItem from "../work-item/work-item";

import styles from './work.module.css';
import '../gen.css';

function Work() {
  const zollAccomplishments = [
    "Created and designed a batch process application using .NET that enables customers to update information that is stored in a database in bulk by importing/exporting CSV files.",
    "Implemented a behavior in a reactive system that sends vehicle information which is sent and partitioned through an Amazon Kinesis Firehose delivery stream and stored in a S3 bucket."
  ]

  const upworkAccomplishments = [
    "Integrated Twilio's API and SDK to allow users to make/receive calls and SMSes through a web browser.",
    "Implemented WebSockets to work with Twilio's API so that users can receive real-time SMSes and calls.",
    "Established user identity throughout web application by utilizing Firebase Authentication.",
    "Utilized Node.js to handle back-end API services."
  ]

  const oneTrolleyAccomplishments = [
    "Created a web scraper using PHP to extract and filter data from websites which was later inserted into a database.",
    "Designed and built a business website for 1Trolley using HTML, CSS and Bootstrap.",
    "Worked in an agile environment."
  ]
  
  return (
    <Container fluid id={styles['work-container']}>
      <p className="section-title">02. EXPERIENCE</p>
      <p id={styles['where-ive-worked']} className="large-title">Where I've worked</p>

      <div id="experience">
        <WorkItem firstChild={true} positionTitle='Software Engineer Intern II' companyUrl='https://www.zoll.com' companyName='ZOLL Data Systems' timeWorked='June 2022 - Present' accomplishments={zollAccomplishments} />
        <WorkItem firstChild={false} lastChild={false} positionTitle='Software Engineer Freelancer' companyUrl='https://www.upwork.com' companyName='Upwork' timeWorked='November 2021 - January 2022' accomplishments={upworkAccomplishments} />
        <WorkItem lastChild={true} positionTitle='Software Engineer Intern' companyUrl='https://www.1trolley.com' companyName='1Trolley' timeWorked='January 2020 - February 2020' accomplishments={oneTrolleyAccomplishments} />
      </div>
    </Container>
  );
}

export default Work;