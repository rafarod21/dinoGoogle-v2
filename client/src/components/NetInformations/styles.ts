import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: max(25vh, 262px);

  margin-top: -55px;

  color: var(--google-gray-500);

  font-family: 'Segoe UI', Tahoma, sans-serif;
  font-size: 95%;

  > header {
    > h1 {
      color: var(--heading-color);
      font-size: 1.5em;
      font-weight: 500;
      margin: 30px 0 10px;
    }
  }
`;

export const Content = styled.div`

  > p {
    margin-bottom: 11px;
    margin-inline-start: 20px;
  }

  > span {
    font-size: .8em;
  }
  
`;

export const SuggestionsList = styled.div`
  margin-bottom: 15px;
  font-size: 1em;
  
  > p {
    margin-block-end: 0;
  }

  > ul {
    margin-inline-start: 45px;

    > li {
      margin: 5px;
    }
  }
`;

export const DinoIcon = styled.img`
  width: 60px;
  height: 60px;
`;