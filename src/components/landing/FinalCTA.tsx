import styled from 'styled-components';
import { ShoppingCart, CheckCircle } from "lucide-react";

interface FinalCTAProps {
  cartUrl: string;
  whatsappUrl: string;
}

const SectionWrapper = styled.section`
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
  
  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`;

const Background = styled.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(to bottom, rgba(6, 78, 59, 0.92), rgba(6, 78, 59, 0.95)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80');
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 10;
`;

const Content = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 2.125rem;
  font-weight: 700;
  color: white;
  line-height: 1.1;
  margin-bottom: 1.25rem;
  opacity: 0;
  animation: fadeSlideIn 0.3s ease-out forwards;
  
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
  
  @keyframes fadeSlideIn {
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
  color: rgba(209, 250, 229, 0.9);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0;
  animation: fadeSlideIn 0.3s ease-out forwards;
  animation-delay: 80ms;
  
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const CTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  opacity: 0;
  animation: fadeSlideIn 0.3s ease-out forwards;
  animation-delay: 160ms;
  
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

const TrustSignals = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: rgba(209, 250, 229, 0.8);
  font-size: 0.875rem;
  opacity: 0;
  animation: fadeSlideIn 0.3s ease-out forwards;
  animation-delay: 240ms;
  
  @media (min-width: 640px) {
    flex-direction: row;
    gap: 1.5rem;
  }
`;

const TrustItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
            Con el Plan Pro, tu anuncio permanece activo y visible, facilitando la recepción continua de contactos.
          </Subtitle>

          <CTAWrapper>
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

          <TrustSignals>
            <TrustItem>
              <CheckCircle size={16} color="#34d399" />
              Pagos seguros y protegidos
            </TrustItem>
            <TrustItem>
              <CheckCircle size={16} color="#34d399" />
              Múltiples métodos de pago
            </TrustItem>
            <TrustItem>
              <CheckCircle size={16} color="#34d399" />
              Soporte incluido
            </TrustItem>
          </TrustSignals>
        </Content>
      </Container>
    </SectionWrapper>
  );
};

export default FinalCTA;
