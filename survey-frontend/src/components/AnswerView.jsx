import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosClient from '../axios.js';
import PageComponent from '../components/PageComponent.jsx';
import { useStateContext } from '../contexts/ContextProvider';

function AnswerView() {
  const { showToast } = useStateContext();
  const { id } = useParams();

  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    axiosClient
      .get(`/answer/${id}`)
      .then((response) => {
        setAnswer(response.data);
        setLoading(false);
        console.log(answer);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <PageComponent title='Answer View'>
      {/* <h1>{answer.content}</h1> */}
      {/* <p>Answer Made at: {answer.end_date}</p> */}
    </PageComponent>
  );
}

export default AnswerView;
