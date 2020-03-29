import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;

    li {
      background: #fff;
      padding: 24px;
      border-radius: 8px;
      position: relative;

      button {
        font-size: 20px;
        position: absolute;
        background: transparent;
        right: 24px;
        top: 24px;
        border: 0;
        transition: opacity 0.2s;

        &:hover {
          opacity: 0.8;
        }
      }

      strong {
        display: block;
        margin-bottom: 16px;
        color: #41414d;
      }

      p + strong {
        margin-top: 32px;
      }

      p {
        color: #737380;
        line-height: 21px;
        font-size: 16px;
      }
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  img {
    height: 64px;
  }

  span {
    font-size: 20px;
    margin-left: 24px;
  }

  button {
    width: 60px;
    height: 60px;
    margin-top: 0;

    border-radius: 4px;
    border: 1px solid #dcdce6;
    background: transparent;
    margin-left: 16px;

    &:hover {
      filter: brightness(90%);
    }
  }

  a {
    width: 260px;
    margin-left: auto;
    margin-top: 0;

    height: 60px;
    background: #e02041;
    color: #fff;
    border: 0;
    border-radius: 8px;
    padding: 0 24px;
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
