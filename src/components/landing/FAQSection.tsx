import styled from 'styled-components';
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqCategories = [
  {
    id: "gratuito",
    label: "Modelo gratuito",
    color: "#10B981",
    faqs: [
      {
        question: "¿Cómo funciona la versión gratuita?",
        answer: "La versión gratuita se activa automáticamente al publicar tu propiedad. Tu anuncio entra en un ciclo de visibilidad que consume una bolsa gratuita de leads. Al agotarse, el anuncio entra en una pausa temporal y el ciclo se reactiva automáticamente.",
      },
      {
        question: "¿La visibilidad gratuita se activa automáticamente?",
        answer: "Sí. Al publicar tu propiedad, la visibilidad gratuita se activa de forma automática sin necesidad de configuración adicional.",
      },
      {
        question: "¿Qué es la bolsa gratuita de leads?",
        answer: "Es una cantidad limitada de contactos asignada automáticamente en la versión gratuita. Mientras haya disponibilidad, tu anuncio se muestra y puede recibir contactos.",
      },
      {
        question: "¿El modelo gratuito funciona por ciclos?",
        answer: "Sí. La versión gratuita opera en ciclos de visibilidad. Cuando se agota la bolsa de leads, el anuncio entra en pausa temporal y luego se reactiva automáticamente.",
      },
    ],
  },
  {
    id: "planes",
    label: "Plan Pro y ProMax",
    color: "#F59E0B",
    faqs: [
      {
        question: "¿Qué cambia al pasar al Plan Pro?",
        answer: "Con el Plan Pro, tu anuncio mantiene visibilidad continua sin entrar en las pausas del ciclo gratuito. Además, puedes recibir contactos por correo y WhatsApp sin tope mensual.",
      },
      {
        question: "¿Cuál es la diferencia entre Pro y ProMax?",
        answer: "Pro incluye visibilidad continua sin pausas. ProMax incluye todas las ventajas de Pro más prioridad visual adicional mediante destacados.",
      },
      {
        question: "¿El Plan Pro garantiza contactos?",
        answer: "No. El Plan Pro garantiza visibilidad continua del anuncio. La recepción de contactos depende de factores como la demanda, la zona y la categoría del inmueble.",
      },
      {
        question: "¿Puedo cambiar de plan cuando quiera?",
        answer: "Sí. Puedes cambiar de plan en cualquier momento. El cambio se aplica de forma inmediata y solo pagas la diferencia proporcional.",
      },
    ],
  },
  {
    id: "contactos",
    label: "Contactos y visibilidad",
    color: "#3B82F6",
    faqs: [
      {
        question: "¿Qué significa visibilidad continua?",
        answer: "Significa que tu anuncio permanece activo y visible sin pausas del ciclo gratuito. Esta condición está incluida en el Plan Pro y ProMax.",
      },
      {
        question: "¿Los contactos son únicos?",
        answer: "Sí. Cada contacto verificado cuenta una sola vez, sin importar cuántos canales use para contactarte (correo, WhatsApp, teléfono).",
      },
      {
        question: "¿Qué canales de contacto incluye cada plan?",
        answer: "La versión gratuita incluye contactos por correo electrónico. Los planes Pro y ProMax incluyen además contactos por WhatsApp sin tope mensual.",
      },
      {
        question: "¿La visibilidad garantiza contactos?",
        answer: "No. La visibilidad facilita que tu anuncio sea visto, pero la recepción de contactos depende de la demanda del mercado, la zona y las características de la propiedad.",
      },
    ],
  },
  {
    id: "pausas",
    label: "Pausas y ciclos",
    color: "#8B5CF6",
    faqs: [
      {
        question: "¿Por qué mi anuncio entra en pausa?",
        answer: "Cuando se agota la bolsa gratuita de leads, el anuncio entra en una pausa temporal como parte del ciclo del modelo gratuito.",
      },
      {
        question: "¿Cuánto dura la pausa del ciclo gratuito?",
        answer: "La pausa dura 30 días. Después de este período, tu bolsa de leads se recarga automáticamente y el anuncio vuelve a estar visible.",
      },
      {
        question: "¿Puedo seguir editando mi anuncio durante la pausa?",
        answer: "Sí. Durante la pausa puedes seguir editando tu anuncio normalmente. Solo deja de aparecer en las búsquedas hasta que el ciclo se reactive.",
      },
      {
        question: "¿Cómo evito las pausas?",
        answer: "Al cambiar al Plan Pro, tu anuncio mantiene visibilidad continua y no entra en las pausas del ciclo gratuito.",
      },
    ],
  },
  {
    id: "pagos",
    label: "Pagos y facturación",
    color: "#F97316",
    faqs: [
      {
        question: "¿Qué métodos de pago aceptan?",
        answer: "Aceptamos tarjeta de crédito, débito, transferencia bancaria y otros métodos de pago electrónicos disponibles en tu región.",
      },
      {
        question: "¿Mis pagos son seguros?",
        answer: "Sí. Todos los pagos se procesan a través de plataformas seguras y protegidas con encriptación de datos.",
      },
      {
        question: "¿La suscripción tiene permanencia?",
        answer: "No. No hay permanencia obligatoria. Puedes cancelar tu suscripción en cualquier momento sin penalizaciones.",
      },
      {
        question: "¿Puedo cancelar cuando quiera?",
        answer: "Sí. Puedes cancelar tu suscripción en cualquier momento. No hay permanencia obligatoria.",
      },
    ],
  },
];

const SectionWrapper = styled.section`
  padding: 4rem 0;
  background: white;
  
  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
  
  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const Title = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.625rem;
  font-weight: 700;
  color: #111827;
  line-height: 1.25;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Highlight = styled.span`
  color: #059669;
`;

const Subtitle = styled.p`
  color: #4b5563;
  max-width: 42rem;
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1.6;
  
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const CategoryTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.625rem;
  margin-bottom: 2.5rem;
`;

const CategoryTab = styled.button<{ $active: boolean; $color: string }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  border-radius: 9999px;
  font-size: 0.9375rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-out;
  background: ${props => props.$active ? props.$color : '#f3f4f6'};
  color: ${props => props.$active ? 'white' : '#4b5563'};
  box-shadow: ${props => props.$active ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'};

  &:hover {
    background: ${props => props.$active ? props.$color : '#e5e7eb'};
  }
`;

const CategoryDot = styled.span<{ $color: string; $active: boolean }>`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background: ${props => props.$active ? 'white' : props.$color};
`;

const AccordionWrapper = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const AccordionItem = styled.div<{ $isOpen: boolean }>`
  background: ${props => props.$isOpen ? '#ecfdf5' : '#f9fafb'};
  border: 1px solid ${props => props.$isOpen ? '#a7f3d0' : '#f3f4f6'};
  border-radius: 0.875rem;
  overflow: hidden;
  transition: all 0.2s ease-out;
`;

const AccordionTrigger = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  padding: 1.125rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.$isOpen ? '#047857' : '#111827'};
  transition: color 0.2s ease-out;

  &:hover {
    color: #047857;
  }
`;

const ChevronIcon = styled.span<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  transition: transform 0.2s ease-out;
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0)'};
`;

const AccordionContent = styled.div<{ $isOpen: boolean }>`
  max-height: ${props => props.$isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.25s ease-out;
`;

const AccordionContentInner = styled.div`
  padding: 0 1.5rem 1.25rem;
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.6;
`;

const HelpNote = styled.p`
  text-align: center;
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-top: 2.5rem;
  
  a {
    color: #059669;
    font-weight: 500;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState("gratuito");
  const [openItem, setOpenItem] = useState<number | null>(null);
  const currentCategory = faqCategories.find((cat) => cat.id === activeCategory);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <SectionWrapper>
      <Container>
        <Header>
          <Title>
            Preguntas <Highlight>frecuentes</Highlight>
          </Title>
          <Subtitle>
            Resolvemos tus dudas sobre el modelo de publicación y los planes
          </Subtitle>
        </Header>

        <CategoryTabs>
          {faqCategories.map((category) => (
            <CategoryTab
              key={category.id}
              $active={activeCategory === category.id}
              $color={category.color}
              onClick={() => {
                setActiveCategory(category.id);
                setOpenItem(null);
              }}
            >
              <CategoryDot $color={category.color} $active={activeCategory === category.id} />
              {category.label}
            </CategoryTab>
          ))}
        </CategoryTabs>

        <AccordionWrapper>
          {currentCategory?.faqs.map((faq, index) => (
            <AccordionItem key={index} $isOpen={openItem === index}>
              <AccordionTrigger 
                $isOpen={openItem === index}
                onClick={() => toggleItem(index)}
              >
                {faq.question}
                <ChevronIcon $isOpen={openItem === index}>
                  <ChevronDown size={18} />
                </ChevronIcon>
              </AccordionTrigger>
              <AccordionContent $isOpen={openItem === index}>
                <AccordionContentInner>
                  {faq.answer}
                </AccordionContentInner>
              </AccordionContent>
            </AccordionItem>
          ))}
        </AccordionWrapper>

        <HelpNote>
          ¿No encuentras tu respuesta?{" "}
          <a href="#">Contáctanos por WhatsApp</a>
        </HelpNote>
      </Container>
    </SectionWrapper>
  );
};

export default FAQSection;
