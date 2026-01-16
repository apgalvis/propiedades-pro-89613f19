import styled from 'styled-components';
import { Check, X, Crown, Shield, Eye, MessageCircle, TrendingUp, Zap } from "lucide-react";

interface PremiumPlansSectionProps {
  cartUrl: string;
  whatsappUrl: string;
}

const features = [
  { name: "Publicar inmuebles", free: true, pro: true, proPlus: true },
  { name: "Editar anuncios en cualquier momento", free: true, pro: true, proPlus: true },
  { name: "Anuncios siempre visibles", free: false, pro: true, proPlus: true },
  { name: "Sin pausas de 30 días", free: false, pro: true, proPlus: true },
  { name: "Leads por correo ilimitados", free: false, pro: true, proPlus: true },
  { name: "Leads por WhatsApp ilimitados", free: false, pro: true, proPlus: true },
  { name: "Destacados incluidos", free: false, pro: false, proPlus: true },
  { name: "Mayor posición en búsquedas", free: false, pro: false, proPlus: true },
];

const SectionWrapper = styled.section`
  padding: 3rem 0;
  background: linear-gradient(to bottom, #ffffff, #f9fafb);
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
  
  @media (min-width: 768px) {
    font-size: 1.875rem;
  }
`;

const Highlight = styled.span`
  color: #059669;
`;

const Subtitle = styled.p`
  color: #4b5563;
  max-width: 36rem;
  margin: 0 auto;
  font-size: 0.875rem;
`;

const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  max-width: 56rem;
  margin: 0 auto 2.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PlanCard = styled.div<{ $variant?: 'default' | 'pro' | 'premium' }>`
  background: ${props => props.$variant === 'premium' ? '#065f46' : 'white'};
  border: ${props => {
    if (props.$variant === 'pro') return '2px solid #a7f3d0';
    if (props.$variant === 'premium') return '2px solid #047857';
    return '1px solid #e5e7eb';
  }};
  border-radius: 0.75rem;
  padding: 1.25rem;
  text-align: center;
  position: relative;
  box-shadow: ${props => props.$variant === 'premium' ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const PopularBadge = styled.span`
  position: absolute;
  top: -0.5rem;
  left: 50%;
  transform: translateX(-50%);
  background: #fbbf24;
  color: #78350f;
  font-size: 0.625rem;
  font-weight: 700;
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
`;

const PlanIconWrapper = styled.div<{ $variant?: 'default' | 'pro' | 'premium' }>`
  width: 3rem;
  height: 3rem;
  background: ${props => {
    if (props.$variant === 'premium') return 'rgba(5, 150, 105, 0.5)';
    if (props.$variant === 'pro') return '#d1fae5';
    return '#f3f4f6';
  }};
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0.75rem;
`;

const PlanTitle = styled.h3<{ $light?: boolean }>`
  font-weight: 700;
  color: ${props => props.$light ? 'white' : '#111827'};
  margin-bottom: 0.25rem;
`;

const PlanSubtitle = styled.p<{ $variant?: 'default' | 'pro' | 'premium' }>`
  font-size: 0.75rem;
  color: ${props => props.$variant === 'premium' ? '#a7f3d0' : '#6b7280'};
  margin-bottom: 1rem;
`;

const ProgressBar = styled.div<{ $variant?: 'default' | 'pro' | 'premium' }>`
  height: 0.5rem;
  background: ${props => props.$variant === 'premium' ? '#064e3b' : '#f3f4f6'};
  border-radius: 9999px;
  overflow: hidden;
  margin-bottom: 0.75rem;
`;

const ProgressFill = styled.div<{ $width: string; $variant?: 'default' | 'pro' | 'premium' }>`
  height: 100%;
  width: ${props => props.$width};
  background: ${props => {
    if (props.$variant === 'premium') return '#34d399';
    if (props.$variant === 'pro') return '#10b981';
    return '#9ca3af';
  }};
  border-radius: 9999px;
`;

const ProgressLabel = styled.p<{ $variant?: 'default' | 'pro' | 'premium' }>`
  font-size: 0.75rem;
  color: ${props => {
    if (props.$variant === 'premium') return '#6ee7b7';
    if (props.$variant === 'pro') return '#059669';
    return '#9ca3af';
  }};
  font-weight: ${props => props.$variant !== 'default' ? '500' : '400'};
`;

const ComparisonTable = styled.div`
  background: white;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  overflow: hidden;
  max-width: 56rem;
  margin: 0 auto 2rem;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
`;

const TableHeaderCell = styled.div<{ $highlight?: boolean }>`
  padding: 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${props => props.$highlight ? '#059669' : '#6b7280'};
  text-align: center;
  background: ${props => props.$highlight ? '#ecfdf5' : 'transparent'};
  
  &:first-child {
    text-align: left;
  }
`;

const TableRow = styled.div<{ $isLast?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border-bottom: ${props => props.$isLast ? 'none' : '1px solid #f3f4f6'};
`;

const TableCell = styled.div<{ $highlight?: boolean }>`
  padding: 0.75rem;
  font-size: 0.75rem;
  color: #374151;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.$highlight ? 'rgba(236, 253, 245, 0.5)' : 'transparent'};
  
  &:first-child {
    justify-content: flex-start;
  }
`;

const BenefitsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BenefitIcon = styled.div`
  width: 2rem;
  height: 2rem;
  background: #d1fae5;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BenefitLabel = styled.span`
  font-size: 0.875rem;
  color: #4b5563;
`;

const CTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  justify-content: center;
  
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background: #059669;
  color: white;
  font-weight: 500;
  border-radius: 100px;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: #10b981;
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: 1px solid #a7f3d0;
  color: #047857;
  font-weight: 500;
  border-radius: 100px;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: #ecfdf5;
  }
`;

const PremiumPlansSection = ({ cartUrl, whatsappUrl }: PremiumPlansSectionProps) => {
  return (
    <SectionWrapper>
      <Container>
        <Header>
          <Title>
            Compara y elige tu <Highlight>nivel de visibilidad</Highlight>
          </Title>
          <Subtitle>
            Desde publicación gratuita hasta máxima exposición premium
          </Subtitle>
        </Header>

        <PlansGrid>
          <PlanCard>
            <PlanIconWrapper>
              <Eye size={24} color="#6b7280" />
            </PlanIconWrapper>
            <PlanTitle>Gratis</PlanTitle>
            <PlanSubtitle>Publicación básica</PlanSubtitle>
            <ProgressBar>
              <ProgressFill $width="25%" />
            </ProgressBar>
            <ProgressLabel>Visibilidad limitada</ProgressLabel>
          </PlanCard>

          <PlanCard $variant="pro">
            <PlanIconWrapper $variant="pro">
              <Crown size={24} color="#059669" />
            </PlanIconWrapper>
            <PlanTitle>Plan Pro</PlanTitle>
            <PlanSubtitle $variant="pro">Visibilidad continua</PlanSubtitle>
            <ProgressBar $variant="pro">
              <ProgressFill $width="65%" $variant="pro" />
            </ProgressBar>
            <ProgressLabel $variant="pro">3x más alcance</ProgressLabel>
          </PlanCard>

          <PlanCard $variant="premium">
            <PopularBadge>POPULAR</PopularBadge>
            <PlanIconWrapper $variant="premium">
              <Shield size={24} color="#6ee7b7" />
            </PlanIconWrapper>
            <PlanTitle $light>Pro + Destacados</PlanTitle>
            <PlanSubtitle $variant="premium">Máxima visibilidad</PlanSubtitle>
            <ProgressBar $variant="premium">
              <ProgressFill $width="100%" $variant="premium" />
            </ProgressBar>
            <ProgressLabel $variant="premium">5x más alcance</ProgressLabel>
          </PlanCard>
        </PlansGrid>

        <ComparisonTable>
          <TableHeader>
            <TableHeaderCell>Característica</TableHeaderCell>
            <TableHeaderCell>Gratis</TableHeaderCell>
            <TableHeaderCell $highlight>Pro</TableHeaderCell>
            <TableHeaderCell $highlight>Pro + Destacados</TableHeaderCell>
          </TableHeader>
          
          {features.map((feature, index) => (
            <TableRow key={index} $isLast={index === features.length - 1}>
              <TableCell>{feature.name}</TableCell>
              <TableCell>
                {feature.free ? <Check size={16} color="#9ca3af" /> : <X size={16} color="#d1d5db" />}
              </TableCell>
              <TableCell>
                {feature.pro ? <Check size={16} color="#10b981" /> : <X size={16} color="#d1d5db" />}
              </TableCell>
              <TableCell $highlight>
                {feature.proPlus ? <Check size={16} color="#059669" /> : <X size={16} color="#d1d5db" />}
              </TableCell>
            </TableRow>
          ))}
        </ComparisonTable>

        <BenefitsRow>
          <BenefitItem>
            <BenefitIcon>
              <TrendingUp size={16} color="#059669" />
            </BenefitIcon>
            <BenefitLabel>Más visitas</BenefitLabel>
          </BenefitItem>
          <BenefitItem>
            <BenefitIcon>
              <Zap size={16} color="#059669" />
            </BenefitIcon>
            <BenefitLabel>Leads más rápido</BenefitLabel>
          </BenefitItem>
          <BenefitItem>
            <BenefitIcon>
              <MessageCircle size={16} color="#059669" />
            </BenefitIcon>
            <BenefitLabel>WhatsApp ilimitado</BenefitLabel>
          </BenefitItem>
        </BenefitsRow>

        <CTAWrapper>
          <PrimaryButton href={cartUrl} target="_blank" rel="noopener noreferrer">
            Ver planes y precios
          </PrimaryButton>
          <SecondaryButton href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={16} />
            Asesoría personalizada
          </SecondaryButton>
        </CTAWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default PremiumPlansSection;
