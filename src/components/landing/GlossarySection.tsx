import styled from 'styled-components';

const glossaryTerms = [
  {
    term: "Bolsa de leads",
    definition: "Cantidad limitada de contactos asignada automáticamente en la versión gratuita.",
  },
  {
    term: "Lead único",
    definition: "Contacto verificado que cuenta una sola vez, sin importar el canal utilizado.",
  },
  {
    term: "Visibilidad continua",
    definition: "Tu anuncio permanece activo y visible sin pausas del ciclo gratuito.",
  },
  {
    term: "Ciclo gratuito",
    definition: "Período de visibilidad activa seguido de una pausa temporal de 30 días.",
  },
  {
    term: "Anuncio pausado",
    definition: "Tu propiedad no aparece en búsquedas pero sigue siendo editable.",
  },
  {
    term: "Anuncio simple",
    definition: "Visibilidad básica disponible en la versión gratuita y Plan Pro.",
  },
  {
    term: "Destacado",
    definition: "Posición premium con prioridad visual en resultados de búsqueda.",
  },
  {
    term: "Pro / ProMax",
    definition: "Planes de pago con visibilidad continua. ProMax incluye destacados.",
  },
];

const SectionWrapper = styled.section`
  padding: 2.5rem 0;
  background: #f9fafb;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Highlight = styled.span`
  color: #059669;
`;

const TermsWrapper = styled.div`
  max-width: 56rem;
  margin: 0 auto;
`;

const TermsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
`;

const TermItem = styled.div`
  position: relative;
  
  &:hover > div {
    opacity: 1;
    visibility: visible;
  }
`;

const TermBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 9999px;
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  cursor: help;
  transition: all 0.2s ease;

  &:hover {
    border-color: #6ee7b7;
    background: #ecfdf5;
  }
`;

const TermDot = styled.span`
  width: 0.375rem;
  height: 0.375rem;
  background: #10b981;
  border-radius: 9999px;
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: #111827;
  color: white;
  font-size: 0.75rem;
  border-radius: 0.5rem;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  width: 14rem;
  text-align: center;
  z-index: 10;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: #111827;
  }
`;

const GlossarySection = () => {
  return (
    <SectionWrapper>
      <Container>
        <Header>
          <Title>
            <Highlight>Glosario</Highlight> de términos
          </Title>
        </Header>

        <TermsWrapper>
          <TermsContainer>
            {glossaryTerms.map((item, index) => (
              <TermItem key={index}>
                <TermBadge>
                  <TermDot />
                  {item.term}
                </TermBadge>
                <Tooltip>
                  {item.definition}
                </Tooltip>
              </TermItem>
            ))}
          </TermsContainer>
        </TermsWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default GlossarySection;