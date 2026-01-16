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
  background: rgba(6, 78, 59, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(5, 150, 105, 0.5);
`;

const BannerContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BannerText = styled.span`
  color: white;
  font-size: 0.875rem;
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
  gap: 0.25rem;
  padding: 0.375rem 0.75rem;
  background: #10b981;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 100px;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: #34d399;
  }
`;

const StickyBanner = ({ cartUrl }: StickyBannerProps) => {
  return (
    <BannerWrapper>
      <BannerContent>
        <div>
          <DesktopText>Haz crecer tu cartera de clientes hoy mismo</DesktopText>
          <MobileText>Crece tu cartera hoy</MobileText>
        </div>
        <BannerButton href={cartUrl} target="_blank" rel="noopener noreferrer">
          <ShoppingCart size={16} />
          Ir al carrito
        </BannerButton>
      </BannerContent>
    </BannerWrapper>
  );
};

export default StickyBanner;
