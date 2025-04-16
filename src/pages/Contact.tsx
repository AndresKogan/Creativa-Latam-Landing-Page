
import React, { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import CalendlyModal from '@/components/CalendlyModal';
import MobileContactView from '@/components/contact/MobileContactView';
import DesktopContactView from '@/components/contact/DesktopContactView';

const Contact = () => {
  const [isCalendlyModalOpen, setIsCalendlyModalOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        <MobileContactView onCalendlyOpen={() => setIsCalendlyModalOpen(true)} />
      ) : (
        <DesktopContactView onCalendlyOpen={() => setIsCalendlyModalOpen(true)} />
      )}
      <CalendlyModal
        isOpen={isCalendlyModalOpen}
        onClose={() => setIsCalendlyModalOpen(false)}
      />
    </>
  );
};

export default Contact;
