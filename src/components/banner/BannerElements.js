import styled from 'styled-components';

export const BannerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 300px;
    // background-color: #1ee8c0;
    margin-bottom: 40px;
`;

export const InformationSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: 100%;
    /* border: 2px solid black; */
`;

export const InformationColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 30%;
    height: 90%;
    /* border: 2px solid black; */
    h2 {
        color: white;
    }
    p {
        color: white;
    }
`;

export const InformationText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    width: 100%;
    height: 50%;
    padding: 30px;
    /* border: 2px solid black; */
`;

export const LogoContainer = styled.div`
    font-size: 3rem;
    /* border: 2px solid black; */
`;

export const Button = styled.a`
    text-align: center;
    border-radius: 15px;
    width: 50%;
    color: #fff;
    background: #676767;
    text-decoration: none;
    padding: 7px;
    &:hover {
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
        color: #fff;
    }
`;