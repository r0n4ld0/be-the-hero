import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;
`;

export const Form = styled.form`
  margin-top: 100px;

  h1 {
    font-size: 32px;
    margin-bottom: 32px;
  }

  input {
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
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

  svg {
    margin-right: 8px;
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
