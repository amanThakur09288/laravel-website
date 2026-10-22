// import api from "./axios";

// // Get published quizzes
// export const getQuizzes = async () => {
//   const response = await api.get("/public/quizzes");
//   return response.data;
// };

// // Get single published quiz
// export const getQuiz = async (id) => {
//   const response = await api.get(`/public/quizzes/${id}`);
//   return response.data;
// };

// // Start quiz
// export const startQuiz = async (quizId) => {
//   const response = await api.post(
//     `/quizzes/${quizId}/attempts`
//   );
//   return response.data;
// };

// // Get attempt
// export const getAttempt = async (attemptId) => {
//   const response = await api.get(
//     `/attempts/${attemptId}`
//   );
//   return response.data;
// };

// // Save answer
// export const saveAnswer = async (attemptId, data) => {
//   const response = await api.put(
//     `/attempts/${attemptId}/answers`,
//     data
//   );
//   return response.data;
// };

// // Submit quiz
// export const submitQuiz = async (attemptId) => {
//   const response = await api.post(
//     `/attempts/${attemptId}/submit`
//   );
//   return response.data;
// };

// // Get result
// export const getQuizResult = async (attemptId) => {
//   const response = await api.get(
//     `/attempts/${attemptId}/result`
//   );
//   return response.data;
// };

import api from "./axios";

const TEST_USER_ID = 2;

export const getQuizzes = async () => {
  const response = await api.get("/public/quizzes");

  return response.data;
};

export const getQuiz = async (id) => {
  const response = await api.get(`/public/quizzes/${id}`);

  return response.data;
};

export const startQuiz = async (quizId) => {
  const response = await api.post(`/quizzes/${quizId}/attempts`, {
    user_id: TEST_USER_ID,
  });

  return response.data;
};

export const getAttempt = async (attemptId) => {
  const response = await api.get(`/attempts/${attemptId}`, {
    params: {
      user_id: TEST_USER_ID,
    },
  });

  return response.data;
};

export const saveAnswer = async (attemptId, data) => {
  const response = await api.put(`/attempts/${attemptId}/answers`, {
    user_id: TEST_USER_ID,
    quiz_question_id: data.quiz_question_id,
    selected_option_ids: data.selected_option_ids,
  });

  return response.data;
};

export const submitQuiz = async (attemptId) => {
  const response = await api.post(`/attempts/${attemptId}/submit`, {
    user_id: TEST_USER_ID,
  });

  return response.data;
};

export const getQuizResult = async (attemptId) => {
  const response = await api.get(`/attempts/${attemptId}/result`, {
    params: {
      user_id: TEST_USER_ID,
    },
  });

  return response.data;
};
