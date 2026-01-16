import styled from 'styled-components';
import { MessageCircle } from "lucide-react";

interface HeroSectionProps {
  cartUrl: string;
  whatsappUrl: string;
}

const HeroWrapper = styled.section`
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: 3.5rem;
`;

const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-image: linear-gradient(to bottom, rgba(6, 78, 59, 0.85), rgba(6, 78, 59, 0.7)), url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80');
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.875rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 3.75rem;
  }
`;

const TitleLine = styled.span<{ $delay?: string }>`
  display: block;
  animation: fadeIn 0.5s ease-out forwards;
  animation-delay: ${props => props.$delay || '0ms'};
  opacity: 0;
  
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

const HighlightGreen = styled.span`
  color: #6ee7b7;
  position: relative;
  display: inline-block;
`;

const HighlightAmber = styled.span`
  color: #fcd34d;
`;

const Underline = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: #34d399;
  transform: scaleX(0);
  animation: drawLine 1s ease-out forwards;
  animation-delay: 0.5s;
  
  @keyframes drawLine {
    to {
      transform: scaleX(1);
    }
  }
`;

const Subtitle = styled.p`
  color: rgba(209, 250, 229, 0.8);
  font-size: 1rem;
  max-width: 42rem;
  margin: 0 auto 1.5rem;
  animation: fadeIn 0.5s ease-out forwards;
  animation-delay: 300ms;
  opacity: 0;
  
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
  
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

const CTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  justify-content: center;
  animation: fadeIn 0.5s ease-out forwards;
  animation-delay: 450ms;
  opacity: 0;
  
  @media (min-width: 640px) {
    flex-direction: row;
  }
  
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: white;
  color: #047857;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 100px;
  text-decoration: none;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: #f3f4f6;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: rgba(5, 150, 105, 0.3);
  border: 1px solid rgba(52, 211, 153, 0.5);
  color: white;
  font-weight: 500;
  font-size: 1rem;
  border-radius: 100px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(5, 150, 105, 0.4);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
`;

const ScrollBox = styled.div`
  width: 1.25rem;
  height: 2rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  padding-top: 0.375rem;
`;

const ScrollDot = styled.div`
  width: 0.25rem;
  height: 0.5rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 9999px;
  animation: scrollIndicator 2s ease-in-out infinite;
  
  @keyframes scrollIndicator {
    0%, 100% {
      opacity: 1;
      transform: translateY(0);
    }
    50% {
      opacity: 0.5;
      transform: translateY(6px);
    }
  }
`;

const HeroSection = ({ cartUrl, whatsappUrl }: HeroSectionProps) => {
  return (
    <HeroWrapper>
      <HeroBackground />
      <HeroContent>
        <HeroTitle>
          <TitleLine>
            Publica <HighlightGreen>
              gratis
              <Underline />
            </HighlightGreen> tus inmuebles
          </TitleLine>
          <TitleLine $delay="150ms">
            Recibe contactos <HighlightAmber>verificados</HighlightAmber> y <HighlightAmber>únicos</HighlightAmber>
          </TitleLine>
        </HeroTitle>

        <Subtitle>
          Publica sin límite, activa visibilidad con tu bolsa de leads gratuita y escala a premium cuando quieras más exposición.
        </Subtitle>

        <CTAWrapper>
          <PrimaryButton href={cartUrl} target="_blank" rel="noopener noreferrer">
            Ver planes y precios
            <span>→</span>
          </PrimaryButton>
          <SecondaryButton href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={16} />
            Asesoría personalizada
          </SecondaryButton>
        </CTAWrapper>

        <ScrollIndicator>
          <ScrollBox>
            <ScrollDot />
          </ScrollBox>
        </ScrollIndicator>
      </HeroContent>
    </HeroWrapper>
  );
};

export default HeroSection;
