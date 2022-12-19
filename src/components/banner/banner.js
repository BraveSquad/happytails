import React from 'react'
import { BannerContainer, InformationSection, InformationColumn, InformationText, Button, LogoContainer } from './BannerElements';
import { GiSittingDog, GiPlantsAndAnimals } from 'react-icons/gi'
import { IoPawSharp } from 'react-icons/io5'
import '../../assets/style/header.css'

function Banner() {
    return (
        <BannerContainer className='header4'>
            <InformationSection>
                <InformationColumn>
                    <InformationText>
                        <LogoContainer>
                            <GiSittingDog />
                        </LogoContainer>
                        <h2>Best Friends Animal Society</h2>
                        <p>To bring about a time when there are no more homeless pets.</p>
                    </InformationText>
                    <Button href='https://bestfriends.org/' target='_blank'>Donate</Button>
                </InformationColumn>
                <InformationColumn>
                    <InformationText>
                        <LogoContainer>
                            <IoPawSharp />
                        </LogoContainer>
                        <h2>Friends of Animals</h2>
                        <p>To end the exploitation of fur-bearing animals.</p>
                    </InformationText>
                    <Button href='https://friendsofanimals.org/' target='_blank'>About Us</Button>
                </InformationColumn>
                <InformationColumn>
                    <InformationText>
                        <LogoContainer>
                            <GiPlantsAndAnimals />
                        </LogoContainer>
                        <h2>Animal Welfare Institute</h2>
                        <p>To save all living animals from any form of inhumane and violent treatment.</p>
                    </InformationText>
                    <Button href='https://awionline.org/' target='_blank'>Learn more</Button>
                </InformationColumn>
            </InformationSection>
        </BannerContainer>
    )
}

export default Banner;