import styled from 'styled-components';
import { Infinity, Eye, Trophy, Smartphone, BarChart3, Headphones, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface PremiumBenefitsProps {
  cartUrl: string;
  whatsappUrl: string;
}

const benefits = [
  { icon: Infinity, title: "Leads ilimitados", description: "Sin tope de contactos mensuales" },
  { icon: Eye, title: "Visibilidad 24/7", description: "Sin pausas ni interrupciones" },
  { icon: Trophy, title: "Destacados y Prime", description: "Máxima exposición en búsquedas" },
  { icon: Smartphone, title: "WhatsApp ilimitado", description: "Leads directo a tu celular" },
  { icon: BarChart3, title: "Métricas avanzadas", description: "Analytics detallados de rendimiento" },
  { icon: Headphones, title: "Soporte prioritario", description: "Atención preferencial" },
];

const SectionWrapper = styled.section`
  padding: 3.5rem 0;
  background: linear-gradient(to bottom right, #064e3b, #065f46, #064e3b);
  position: relative;
  overflow: hidden;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.1;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 10;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.75rem;
  
  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(to right, #fcd34d, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  color: rgba(209, 250, 229, 0.8);
  max-width: 42rem;
  margin: 0 auto;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  max-width: 56rem;
  margin: 0 auto 2.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const BenefitCard = styled.div<{ $delay: number; $isVisible: boolean }>`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  opacity: ${props => props.$isVisible ? 1 : 0};
  animation: ${props => props.$isVisible ? 'fadeIn 0.5s ease-out forwards' : 'none'};
  animation-delay: ${props => props.$delay}ms;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const BenefitIconWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(16, 185, 129, 0.3);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
`;

const BenefitTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.125rem;
`;

const BenefitDescription = styled.p`
  color: rgba(209, 250, 229, 0.7);
  font-size: 0.75rem;
`;

const ComparisonCard = styled.div<{ $isVisible: boolean }>`
  max-width: 28rem;
  margin: 0 auto 2.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  opacity: ${props => props.$isVisible ? 1 : 0};
  animation: ${props => props.$isVisible ? 'fadeIn 0.5s ease-out forwards' : 'none'};
  animation-delay: 300ms;
`;

const ComparisonTitle = styled.h3`
  text-align: center;
  color: white;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 0.875rem;
`;

const ComparisonBars = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const BarLabel = styled.div<{ $bold?: boolean }>`
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: ${props => props.$bold ? 'white' : 'rgba(255, 255, 255, 0.8)'};
  margin-bottom: 0.25rem;
  
  span:last-child {
    color: ${props => props.$bold ? '#fcd34d' : 'inherit'};
    font-weight: ${props => props.$bold ? '700' : '400'};
  }
`;

const ProgressBar = styled.div`
  height: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  overflow: hidden;
`;

const ProgressFill = styled.div<{ $width: string; $isVisible: boolean; $gradient?: boolean; $delay?: string }>`
  height: 100%;
  background: ${props => props.$gradient ? 'linear-gradient(to right, #34d399, #fbbf24)' : '#9ca3af'};
  border-radius: 9999px;
  width: ${props => props.$isVisible ? props.$width : '0'};
  transition: width 1s ease-out;
  transition-delay: ${props => props.$delay || '0ms'};
`;

const ComparisonResult = styled.p`
  text-align: center;
  color: #fcd34d;
  font-weight: 700;
  font-size: 1.125rem;
  margin-top: 1rem;
`;

const CTAWrapper = styled.div<{ $isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  justify-content: center;
  opacity: ${props => props.$isVisible ? 1 : 0};
  animation: ${props => props.$isVisible ? 'fadeIn 0.5s ease-out forwards' : 'none'};
  animation-delay: 400ms;
  
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const GradientButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 1.5rem;
  background: linear-gradient(to right, #fbbf24, #f59e0b);
  color: #064e3b;
  font-weight: 700;
  border-radius: 100px;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #f59e0b, #d97706);
    box-shadow: 0 4px 20px rgba(245, 158, 11, 0.5);
  }
`;

const OutlineButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-weight: 500;
  border-radius: 100px;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const PremiumBenefits = ({ cartUrl, whatsappUrl }: PremiumBenefitsProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <SectionWrapper ref={sectionRef}>
      <BackgroundPattern />
      <Container>
        <Header>
          <Title>
            Desbloquea tu <GradientText>potencial</GradientText>
          </Title>
          <Subtitle>
            Con Premium, tu negocio inmobiliario alcanza otro nivel de resultados
          </Subtitle>
        </Header>

        <BenefitsGrid>
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} $delay={index * 50} $isVisible={isVisible}>
              <BenefitIconWrapper>
                <benefit.icon size={20} color="#6ee7b7" />
              </BenefitIconWrapper>
              <BenefitTitle>{benefit.title}</BenefitTitle>
              <BenefitDescription>{benefit.description}</BenefitDescription>
            </BenefitCard>
          ))}
        </BenefitsGrid>

        <ComparisonCard $isVisible={isVisible}>
          <ComparisonTitle>Comparativa de resultados</ComparisonTitle>
          <ComparisonBars>
            <div>
              <BarLabel>
                <span>Visibilidad Gratuita</span>
                <span>25%</span>
              </BarLabel>
              <ProgressBar>
                <ProgressFill $width="25%" $isVisible={isVisible} />
              </ProgressBar>
            </div>
            <div>
              <BarLabel $bold>
                <span>Visibilidad Premium</span>
                <span>100%</span>
              </BarLabel>
              <ProgressBar>
                <ProgressFill $width="100%" $isVisible={isVisible} $gradient $delay="200ms" />
              </ProgressBar>
            </div>
          </ComparisonBars>
          <ComparisonResult>4× más visibilidad</ComparisonResult>
        </ComparisonCard>

        <CTAWrapper $isVisible={isVisible}>
          <GradientButton href={cartUrl} target="_blank" rel="noopener noreferrer">
            Ver planes y precios
          </GradientButton>
          <OutlineButton href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={16} />
            Contactar por WhatsApp
          </OutlineButton>
        </CTAWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default PremiumBenefits;
