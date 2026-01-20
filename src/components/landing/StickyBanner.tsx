import styled from 'styled-components';
import { ShoppingCart } from "lucide-react";

interface StickyBannerProps {
  cartUrl: string;
}

const BannerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(6, 78, 59, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(5, 150, 105, 0.5);
`;

const BannerContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.625rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BannerText = styled.span`
  color: white;
  font-size: 0.9375rem;
  font-weight: 500;
`;

const MobileText = styled(BannerText)`
  display: inline;
  
  @media (min-width: 640px) {
    display: none;
  }
`;

const DesktopText = styled(BannerText)`
  display: none;
  
  @media (min-width: 640px) {
    display: inline;
  }
`;

const BannerButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 1rem;
  min-height: 36px;
  background: #059669;
  color: white;
  font-size: 0.9375rem;
  font-weight: 600;
  border-radius: 100px;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.25),
    0 1px 4px rgba(5, 150, 105, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease-out;

  &:hover {
    background: #10b981;
    box-shadow: 
      0 4px 12px rgba(0, 0, 0, 0.3),
      0 2px 6px rgba(16, 185, 129, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
  }
`;

const StickyBanner = ({ cartUrl }: StickyBannerProps) => {
  return (
    <BannerWrapper>
      <BannerContent>
        <div>
          <DesktopText>Pasa a visibilidad continua hoy</DesktopText>
          <MobileText>Visibilidad continua</MobileText>
        </div>
        <BannerButton href={cartUrl} target="_blank" rel="noopener noreferrer">
          <ShoppingCart size={16} />
          Cambiar a Pro
        </BannerButton>
      </BannerContent>
    </BannerWrapper>
  );
};

export default StickyBanner;
