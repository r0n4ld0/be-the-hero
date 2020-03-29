import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 380px;

  h1 {
    margin: 64px 0 32px;
    font-size: 32px;
  }

  p {
    font-size: 18px;
    color: #737380;
    line-height: 32px;
  }

  a {
    display: flex;
    align-items: center;
    margin-top: 40px;
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
    color: #41414d;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;
export const Form = styled.form`
  width: 100%;
  max-width: 450px;

  input {
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
    margin-top: 8px;
    font-size: 16px;
  }

  textarea {
    width: 100%;
    min-height: 140px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 16px 24px;
    margin-top: 8px;
    font-size: 16px;
    line-height: 24px;
    resize: none;
  }

  div {
    display: flex;

    input {
      & + input {
        margin-left: 8px;
      }
    }
  }

  button {
    width: 100%;
    height: 60px;
    background: #e02041;
    color: #fff;
    border: 0;
    border-radius: 8px;
    padding: 0 24px;
    margin-top: 16px;
    font-weight: 700;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(90%);
    }
  }
`;
