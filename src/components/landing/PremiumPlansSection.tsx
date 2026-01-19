import styled from 'styled-components';
import { Check, X, Crown, Shield, Eye, MessageCircle, TrendingUp, Zap } from "lucide-react";

interface PremiumPlansSectionProps {
  cartUrl: string;
  whatsappUrl: string;
}

const features = [
  { name: "Publicar propiedades", free: true, pro: true, proPlus: true },
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
            <PlanTitle $light>ProMax</PlanTitle>
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
            <TableHeaderCell $highlight>ProMax</TableHeaderCell>
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
            Cambiar a Pro
          </PrimaryButton>
          <SecondaryButton href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Escríbenos por WhatsApp
          </SecondaryButton>
        </CTAWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default PremiumPlansSection;
