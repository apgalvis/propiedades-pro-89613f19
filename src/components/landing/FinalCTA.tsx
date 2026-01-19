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
            ¿Listo para pasar a <Highlight>visibilidad continua</Highlight>?
          </Title>
          <Subtitle>
            Con el Plan Pro, tu anuncio no se pausa y mantiene visibilidad continua.
          </Subtitle>

          <CTAWrapper>
            <GradientButton href={cartUrl} target="_blank" rel="noopener noreferrer">
              <ShoppingCart size={16} />
              Cambiar a Pro
            </GradientButton>
            <OutlineButton href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Escríbenos por WhatsApp
            </OutlineButton>
          </CTAWrapper>

          <TrustSignals>
            <TrustItem>
              <CheckCircle size={14} color="#34d399" />
              Pagos seguros y protegidos
            </TrustItem>
            <TrustItem>
              <CheckCircle size={14} color="#34d399" />
              Múltiples métodos de pago
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
