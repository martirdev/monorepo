import { Button } from "@/shared/ui/components/button";
import { Input } from "@/shared/ui/components/input";
import { Container } from "@/shared/ui/layouts/container";
import { TextLink } from "@/shared/ui/text-link";

export function Footer() {
  return (
    <footer className="py-16">
      <Container className="flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col md:flex-row gap-10 flex-1">
          <div className="flex-1 leading-5">
            <p className="font-bold">Контакты</p>
            <div className="mt-10 text-sm">
              <ul className="space-y-3">
                <li>
                  email:{" "}
                  <a href="mail:maksim@martir.ru" className="hover:underline">
                    maksim@martir.ru
                  </a>
                </li>
                <li>
                  телефон:{" "}
                  <a href="tel:+79221558068" className="hover:underline">
                    +7(922)155-80-68
                  </a>
                </li>
                <li className="text-gray-600">
                  Мы всегда готовы прийти на помощь, но наше время работы с
                  10:00 до 20:00
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 leading-5">
            <p className="font-bold">Помощь</p>
            <div className="mt-10 text-sm">
              <ul className="space-y-3">
                <li>
                  <TextLink to="/refund">Возврат</TextLink>
                </li>
                <li>
                  <TextLink to="/delivery-and-payments">
                    Доставка и опалата
                  </TextLink>
                </li>
                <li>
                  <TextLink to="/faq">FAQ</TextLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1 leading-5">
          <p className="font-bold">Подписаться на рассылку</p>
          <div className="mt-10 space-y-3">
            <div className="flex gap-2">
              <Input placeholder="Email" type="email" />
              <Button>Подписаться</Button>
            </div>
            <p className="text-sm text-gray-600">
              Вводя свой адрес электронной почты ниже, вы соглашаетесь получать
              рассылку о наших новых коллекциях, мероприятиях и инициативах.
              Подробнее об этом см. в политике конфиденциальности
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
