import styled from 'styled-components';
import { Infinity, Eye, Trophy, Smartphone, BarChart3, Headphones, ShoppingCart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface PremiumBenefitsProps {
  cartUrl: string;
  whatsappUrl: string;
}

const benefits = [
  { icon: Infinity, title: "Contactos sin tope mensual", description: "Sin límite mensual de recepción por visibilidad activa." },
  { icon: Eye, title: "Visibilidad continua", description: "Tu anuncio permanece activo sin pausas ni interrupciones." },
  { icon: Trophy, title: "Destacados incluidos", description: "Prioridad visual adicional en resultados de búsqueda." },
  { icon: Smartphone, title: "Contacto por WhatsApp sin tope", description: "Recepción continua de contactos por WhatsApp.", isGift: true },
  { icon: BarChart3, title: "Métricas avanzadas", description: "Indicadores de visibilidad y rendimiento del anuncio." },
  { icon: Headphones, title: "Soporte prioritario", description: "Atención preferencial para cuentas ProMax." },
];

const SectionWrapper = styled.section`
  padding: 4rem 0;
  background: linear-gradient(to bottom right, #064e3b, #065f46, #064e3b);
  position: relative;
  overflow: hidden;
  
  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`;

const BackgroundPattern = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.1;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 10;
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
  color: white;
  line-height: 1.25;
  margin-bottom: 1rem;
  
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
  color: rgba(209, 250, 229, 0.9);
  max-width: 42rem;
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1.6;
  
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  max-width: 56rem;
  margin: 0 auto 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 4rem;
  }
`;

const BenefitCard = styled.div<{ $delay: number; $isVisible: boolean }>`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: ${props => props.$isVisible ? 'translateY(0)' : 'translateY(10px)'};
  transition: opacity 0.3s ease-out, transform 0.3s ease-out, background 0.2s ease;
  transition-delay: ${props => Math.min(props.$delay, 320)}ms;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

const BenefitIconWrapper = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  background: rgba(16, 185, 129, 0.3);
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const BenefitTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 0.375rem;
`;

const BenefitTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
  line-height: 1.3;
`;

const GiftBadge = styled.span`
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  color: #064e3b;
  font-size: 0.6875rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
`;

const BenefitDescription = styled.p`
  color: rgba(209, 250, 229, 0.8);
  font-size: 0.9375rem;
  line-height: 1.5;
`;

const ComparisonCard = styled.div<{ $isVisible: boolean }>`
  max-width: 28rem;
  margin: 0 auto 3rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: ${props => props.$isVisible ? 'translateY(0)' : 'translateY(10px)'};
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  transition-delay: 200ms;
  
  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;

const ComparisonTitle = styled.h3`
  text-align: center;
  color: white;
  font-weight: 600;
  margin-bottom: 1.25rem;
  font-size: 1.125rem;
  line-height: 1.3;
`;

const ComparisonBars = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BarLabel = styled.div<{ $bold?: boolean }>`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: ${props => props.$bold ? 'white' : 'rgba(255, 255, 255, 0.8)'};
  margin-bottom: 0.375rem;
  
  span:last-child {
    color: ${props => props.$bold ? '#fcd34d' : 'inherit'};
    font-weight: ${props => props.$bold ? '700' : '400'};
  }
`;

const ProgressBar = styled.div`
  height: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  overflow: hidden;
`;

const SegmentedBar = styled.div<{ $isVisible: boolean }>`
  display: flex;
  gap: 0.375rem;
  height: 100%;
  width: 100%;
  padding: 0 0.125rem;
  align-items: center;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transition: opacity 0.3s ease-out;
`;

const BarSegment = styled.div<{ $delay: number; $isVisible: boolean }>`
  flex: 1;
  height: 0.5rem;
  background: #9ca3af;
  border-radius: 9999px;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: ${props => props.$isVisible ? 'scaleX(1)' : 'scaleX(0)'};
  transition: all 0.25s ease-out;
  transition-delay: ${props => Math.min(props.$delay, 320)}ms;
`;

const ContinuousBar = styled.div<{ $isVisible: boolean }>`
  height: 100%;
  background: linear-gradient(to right, #34d399, #10B981);
  border-radius: 9999px;
  width: ${props => props.$isVisible ? '100%' : '0'};
  transition: width 0.8s ease-out;
  transition-delay: 150ms;
  box-shadow: 0 0 8px rgba(52, 211, 153, 0.4);
`;

const ComparisonResult = styled.p`
  text-align: center;
  color: #fcd34d;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.4;
  margin-top: 1.25rem;
`;

const Microcopy = styled.p`
  text-align: center;
  color: rgba(209, 250, 229, 0.6);
  font-size: 0.8125rem;
  line-height: 1.5;
  margin-top: 0.875rem;
  font-style: italic;
`;

const CTAWrapper = styled.div<{ $isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: ${props => props.$isVisible ? 'translateY(0)' : 'translateY(10px)'};
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  transition-delay: 300ms;
  
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  min-height: 48px;
  background: #059669;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 100px;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.3),
    0 2px 8px rgba(5, 150, 105, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease-out;

  &:hover {
    background: #10b981;
    box-shadow: 
      0 6px 20px rgba(0, 0, 0, 0.35),
      0 4px 12px rgba(16, 185, 129, 0.5),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  min-height: 48px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: white;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 100px;
  text-decoration: none;
  transition: all 0.2s ease-out;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.6);
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
            Desbloquea <GradientText>máxima exposición</GradientText>
          </Title>
          <Subtitle>
            Con ProMax, tu anuncio accede al nivel más alto de visibilidad disponible
          </Subtitle>
        </Header>

        <BenefitsGrid>
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} $delay={index * 60} $isVisible={isVisible}>
              <BenefitIconWrapper>
                <benefit.icon size={22} color="#6ee7b7" />
              </BenefitIconWrapper>
              <BenefitTitleWrapper>
                <BenefitTitle>{benefit.title}</BenefitTitle>
                {'isGift' in benefit && benefit.isGift && <GiftBadge>🎁 Regalo</GiftBadge>}
              </BenefitTitleWrapper>
              <BenefitDescription>{benefit.description}</BenefitDescription>
            </BenefitCard>
          ))}
        </BenefitsGrid>

        <ComparisonCard $isVisible={isVisible}>
          <ComparisonTitle>Comparativa de niveles de visibilidad</ComparisonTitle>
          <ComparisonBars>
            <div>
              <BarLabel>
                <span>Visibilidad versión gratuita</span>
              </BarLabel>
              <ProgressBar>
                <SegmentedBar $isVisible={isVisible}>
                  {[...Array(8)].map((_, i) => (
                    <BarSegment key={i} $delay={i * 60} $isVisible={isVisible} />
                  ))}
                </SegmentedBar>
              </ProgressBar>
            </div>
            <div>
              <BarLabel $bold>
                <span>Visibilidad Pro / ProMax</span>
              </BarLabel>
              <ProgressBar>
                <ContinuousBar $isVisible={isVisible} />
              </ProgressBar>
            </div>
          </ComparisonBars>
          <ComparisonResult>Visibilidad continua frente a la versión gratuita</ComparisonResult>
          <Microcopy>La visibilidad puede variar según zona, categoría y demanda del mercado.</Microcopy>
        </ComparisonCard>

        <CTAWrapper $isVisible={isVisible}>
          <PrimaryButton href={cartUrl} target="_blank" rel="noopener noreferrer">
            <ShoppingCart size={18} />
            Cambiar a Pro
          </PrimaryButton>
          <SecondaryButton href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Escríbenos por WhatsApp
          </SecondaryButton>
        </CTAWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default PremiumBenefits;
