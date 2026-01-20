import styled from 'styled-components';
import { Upload, Eye, CheckCircle, PauseCircle, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    icon: Upload,
    title: "Publica gratis tu propiedad",
    description: "Sube tus propiedades sin límite. Siempre editables.",
    color: "#10b981",
  },
  {
    icon: Eye,
    title: "Activación automática de la versión gratuita",
    description: "Al publicar, tu anuncio entra automáticamente en la versión gratuita y comienza a consumir de la bolsa gratuita de leads.",
    color: "#059669",
  },
  {
    icon: CheckCircle,
    title: "Recibe contactos según disponibilidad",
    description: "Recibes contactos mientras tengas disponibilidad en tu bolsa gratuita de consumo.",
    color: "#047857",
  },
  {
    icon: PauseCircle,
    title: "Pausa cíclica de 30 días",
    description: "Al agotarse la bolsa gratuita, el anuncio entra en una pausa temporal de 30 días. El ciclo se reactiva automáticamente.",
    color: "#6b7280",
  },
  {
    icon: TrendingUp,
    title: "Cambia a Plan Pro",
    description: "Mantén tu anuncio activo con visibilidad continua y sin pausas.",
    color: "#10b981",
  },
];

const SectionWrapper = styled.section`
  padding: 4rem 0;
  background: linear-gradient(to bottom, #f9fafb, #ffffff);
  
  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;

const Title = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.625rem;
  font-weight: 700;
  color: #111827;
  line-height: 1.25;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Highlight = styled.span`
  color: #059669;
`;

const Subtitle = styled.p`
  color: #4b5563;
  max-width: 42rem;
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1.6;
  
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const StepsContainer = styled.div`
  position: relative;
  max-width: 56rem;
  margin: 0 auto;
`;

const ConnectingLine = styled.div<{ $isVisible: boolean }>`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #e5e7eb;
  transform: translateX(-50%);
  display: none;
  
  @media (min-width: 768px) {
    display: block;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: #10b981;
    height: ${props => props.$isVisible ? '100%' : '0'};
    transition: height 0.8s ease-out;
  }
`;

const StepsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    gap: 0;
  }
`;

const StepItem = styled.div<{ $index: number; $isVisible: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: ${props => props.$isVisible ? 'translateY(0)' : 'translateY(10px)'};
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  transition-delay: ${props => Math.min(props.$index * 80, 320)}ms;
  
  @media (min-width: 768px) {
    gap: 2rem;
    flex-direction: ${props => props.$index % 2 === 0 ? 'row' : 'row-reverse'};
  }
`;

const StepContent = styled.div<{ $index: number }>`
  flex: 1;
  
  @media (min-width: 768px) {
    text-align: ${props => props.$index % 2 === 0 ? 'right' : 'left'};
  }
`;

const StepCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 0.875rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #f3f4f6;
  transition: box-shadow 0.2s ease-out;
  
  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

const StepTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  line-height: 1.3;
  margin-bottom: 0.5rem;
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const StepDescription = styled.p`
  color: #4b5563;
  font-size: 1rem;
  line-height: 1.6;
`;

const IconContainer = styled.div<{ $color: string }>`
  position: relative;
  z-index: 10;
  flex-shrink: 0;
  width: 3.5rem;
  height: 3.5rem;
  background: ${props => props.$color};
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

const StepNumber = styled.span`
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  width: 1.375rem;
  height: 1.375rem;
  background: white;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8125rem;
  font-weight: 700;
  color: #374151;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const Spacer = styled.div`
  flex: 1;
  display: none;
  
  @media (min-width: 768px) {
    display: block;
  }
`;

const Note = styled.p`
  text-align: center;
  font-size: 0.8125rem;
  color: #6b7280;
  line-height: 1.5;
  margin-top: 2.5rem;
  max-width: 36rem;
  margin-left: auto;
  margin-right: auto;
`;

const HowItWorksSection = () => {
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
      <Container>
        <Header>
          <Title>
            ¿Cómo funciona la versión <Highlight>gratuita</Highlight>?
          </Title>
          <Subtitle>
            Un modelo transparente que te permite comenzar sin inversión inicial
          </Subtitle>
        </Header>

        <StepsContainer>
          <ConnectingLine $isVisible={isVisible} />

          <StepsWrapper>
            {steps.map((step, index) => (
              <StepItem key={index} $index={index} $isVisible={isVisible}>
                <StepContent $index={index}>
                  <StepCard>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                  </StepCard>
                </StepContent>

                <IconContainer $color={step.color}>
                  <step.icon size={24} color="white" />
                  <StepNumber>{index + 1}</StepNumber>
                </IconContainer>

                <Spacer />
              </StepItem>
            ))}
          </StepsWrapper>
        </StepsContainer>

        <Note>
          💡 Durante la pausa, tus propiedades siguen editables y listas para reactivarse en el siguiente ciclo.
        </Note>
      </Container>
    </SectionWrapper>
  );
};

export default HowItWorksSection;
