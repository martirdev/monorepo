import {useCallback, useState} from 'react';

import {ContentBlock} from '_features/content-block';
import {FeedbackForm} from '_features/feedback-form';
import {Button} from '_shared/button';
import {Container} from '_shared/container';

import {LABELS} from './consts';

function FAQ() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <Container px={3} className="py-24" width="large">
      <h1 className="text-page-title uppercase">{LABELS.CONTACTS}</h1>
      <div className="mt-10">
        <ContentBlock id="e19cf96126a842a1bd196d12d42c085d" />
      </div>
      <h2 className="mb-4 mt-10 text-page-title uppercase">{LABELS.LEFT_QUESTIONS}</h2>
      <div className="flex items-center justify-between">
        <p>{LABELS.FEEDBACK_FORM_DESCRIPTION}</p>
        <Button onClick={handleOpenModal}>{LABELS.FEEDBACK_FORM_BUTTON}!</Button>
      </div>
      <FeedbackForm isOpen={isOpen} onClose={handleCloseModal} />
    </Container>
  );
}

export default FAQ;
