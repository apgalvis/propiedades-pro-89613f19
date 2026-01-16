import styled from 'styled-components';
import { ShoppingCart, CheckCircle, MessageCircle } from "lucide-react";

interface FinalCTAProps {
  cartUrl: string;
  whatsappUrl: string;
}

const SectionWrapper = styled.section`
  padding: 3.5rem 0;
  position: relative;
  overflow: hidden;
`;

const Background = styled.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(to bottom, rgba(6, 78, 59, 0.92), rgba(6, 78, 59, 0.95)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80');
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 10;
`;

const Content = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  animation: fadeIn 0.5s ease-out forwards;
  
  @media (min-width: 768px) {
    font-size: 2.25rem;
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

const Highlight = styled.span`
  color: #fcd34d;
`;

const Subtitle = styled.p`
  color: rgba(209, 250, 229, 0.8);
  font-size: 1rem;
  margin-bottom: 1.5rem;
  animation: fadeIn 0.5s ease-out forwards;
  animation-delay: 100ms;
  opacity: 0;
  
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
  margin-bottom: 1.5rem;
  animation: fadeIn 0.5s ease-out forwards;
  animation-delay: 200ms;
  opacity: 0;
  
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const GradientButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
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

const TrustSignals = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: rgba(209, 250, 229, 0.7);
  font-size: 0.75rem;
  animation: fadeIn 0.5s ease-out forwards;
  animation-delay: 300ms;
  opacity: 0;
  
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const TrustItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.375rem;
`;

const FinalCTA = ({ cartUrl, whatsappUrl }: FinalCTAProps) => {
  return (
    <SectionWrapper>
      <Background />
      <Container>
        <Content>
          <Title>
            Da el salto a <Highlight>visibilidad continua</Highlight>
          </Title>
          <Subtitle>
            Únete a miles de agentes que ya multiplicaron sus resultados con Premium
          </Subtitle>

          <CTAWrapper>
            <GradientButton href={cartUrl} target="_blank" rel="noopener noreferrer">
              <ShoppingCart size={16} />
              Ir al carrito y activar Premium
            </GradientButton>
            <OutlineButton href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} />
              Contactar por WhatsApp
            </OutlineButton>
          </CTAWrapper>

          <TrustSignals>
            <TrustItem>
              <CheckCircle size={14} color="#34d399" />
              Sin permanencia
            </TrustItem>
            <TrustItem>
              <CheckCircle size={14} color="#34d399" />
              Cancela cuando quieras
            </TrustItem>
            <TrustItem>
              <CheckCircle size={14} color="#34d399" />
              Soporte incluido
            </TrustItem>
          </TrustSignals>
        </Content>
      </Container>
    </SectionWrapper>
  );
};

export default FinalCTA;
