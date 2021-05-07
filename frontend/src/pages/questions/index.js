import React from 'react'
import QuestionCard from "../../components/question.card";




function Index(props) {
      const renderQuestionCard = props.question.map(({ id, ...rest }) => {
        return <QuestionCard {...rest} key={id} />;
      });
    return (
      <>
        question and answer page
        {renderQuestionCard}
      </>
    );
}


export default Index
