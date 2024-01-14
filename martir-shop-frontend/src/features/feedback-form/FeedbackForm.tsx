import {memo} from 'react';

import {Button} from '_shared/button';
import {Input} from '_shared/input';
import {Modal, ModalBody, ModalFooter, ModalHeader} from '_shared/modal';
import {Select} from '_shared/select';
import {TextArea} from '_shared/text-area';
import {useForm} from '_utils/hooks/useForm';

const INITIAL_VALUE = {
  name: '',
  phoneNumber: '',
  email: '',
  telegram: '',
  question: '',
  typeOfCommunication: ''
};

const optionsForCommynication = [
  {
    label: 'Телеграм',
    value: 'Telegram'
  },
  {
    label: 'Номер телефона',
    value: 'phone'
  },
  {
    label: 'Электронная почта',
    value: 'Email'
  }
];

type FeedbackFormPropsType = {
  isOpen: boolean;
  onClose: () => void;
};

const FeedbackForm = memo<FeedbackFormPropsType>(function FeedbackForm({isOpen, onClose}) {
  const {getName, Form} = useForm(INITIAL_VALUE);

  return (
    <Form
      onSubmit={(values, {setSubmitting}) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalHeader title="Связаться с нами" />
        <ModalBody>
          <div className="flex flex-col gap-4 pt-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Фамилия Имя Отчество</label>
              <Input name={getName('name')} placeholder="Ф.И.О" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="typeOfCommunication">Удобный способ связи</label>
              <Select
                options={optionsForCommynication}
                id="typeOfCommunication"
                name={getName('typeOfCommunication')}
                placeholder="Способ связи"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phoneNumber">Номер телефона</label>
              <Input id="phoneNumber" name={getName('phoneNumber')} placeholder="+7 (000) 000-0000" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <Input id="email" name={getName('email')} placeholder="youremail@martir.ru" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="telegram">Логин в Telegram</label>
              <Input id="telegram" name={getName('telegram')} placeholder="@username" />
            </div>
            <div className="flex flex-col gap-2 pb-3">
              <label htmlFor="question">Вопрос или пожелание</label>
              <TextArea id="question" name={getName('question')} placeholder="Ваш вопрос здесь..." className="h-24" />
            </div>
          </div>
          <ModalFooter>
            <Button>Отправить</Button>
            <Button type="default" onClick={onClose}>
              Отменить
            </Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </Form>
  );
});
export {FeedbackForm};
