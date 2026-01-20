import styled from 'styled-components';
import { Eye, TrendingUp, Zap } from "lucide-react";

const SectionWrapper = styled.section`
  padding: 4rem 0;
  background: linear-gradient(to right, #ecfdf5, #ffffff, #ecfdf5);
  
  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const CardWrapper = styled.div`
  max-width: 48rem;
  margin: 0 auto;
`;

const Card = styled.div`
  position: relative;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: 1px solid #d1fae5;
  overflow: hidden;
`;

const DecorativeTopRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 8rem;
  height: 8rem;
  background: linear-gradient(to bottom left, #d1fae5, transparent);
  border-bottom-left-radius: 100%;
  opacity: 0.6;
`;

const DecorativeBottomLeft = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 6rem;
  height: 6rem;
  background: linear-gradient(to top right, #ecfdf5, transparent);
  border-top-right-radius: 100%;
  opacity: 0.6;
`;

const CardContent = styled.div`
  position: relative;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    padding: 2.5rem;
    flex-direction: row;
    gap: 2rem;
  }
`;

const IllustrationWrapper = styled.div`
  flex-shrink: 0;
`;

const IllustrationContainer = styled.div`
  position: relative;
`;

const IconBox = styled.div`
  width: 5rem;
  height: 5rem;
  background: linear-gradient(to bottom right, #34d399, #059669);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 768px) {
    width: 6rem;
    height: 6rem;
  }
`;

const PingRing = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 1rem;
  border: 2px solid #34d399;
  animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
  opacity: 0.2;
  
  @keyframes ping {
    75%, 100% {
      transform: scale(2);
      opacity: 0;
    }
  }
`;

const TrendingBadge = styled.div`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  width: 2rem;
  height: 2rem;
  background: #fbbf24;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

const ContentWrapper = styled.div`
  flex: 1;
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  line-height: 1.3;
  margin-bottom: 0.625rem;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Highlight = styled.span`
  color: #059669;
`;

const Description = styled.p`
  color: #4b5563;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #ecfdf5;
  color: #047857;
  padding: 0.625rem 1.25rem;
  border-radius: 9999px;
  font-size: 0.9375rem;
  font-weight: 500;
`;

const VisibilityCallout = () => {
  return (
    <SectionWrapper>
      <Container>
        <CardWrapper>
          <Card>
            <DecorativeTopRight />
            <DecorativeBottomLeft />
            
            <CardContent>
              <IllustrationWrapper>
                <IllustrationContainer>
                  <IconBox>
                    <Eye size={48} color="white" />
                  </IconBox>
                  <PingRing />
                  <TrendingBadge>
                    <TrendingUp size={16} color="white" />
                  </TrendingBadge>
                </IllustrationContainer>
              </IllustrationWrapper>
              
              <ContentWrapper>
                <Title>
                  Control total sobre <Highlight>tu anuncio</Highlight>
                </Title>
                <Description>
                  Tu anuncio es siempre tuyo. Puedes editarlo, gestionarlo o cambiar de plan en cualquier momento, incluso durante el ciclo gratuito.
                </Description>
                <Badge>
                  <Zap size={18} />
                  Flexibilidad total sin compromisos
                </Badge>
              </ContentWrapper>
            </CardContent>
          </Card>
        </CardWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default VisibilityCallout;
