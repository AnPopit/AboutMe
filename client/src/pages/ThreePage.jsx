import React, { useState, useEffect } from 'react';
import {
    Button,
    Input,
    Textarea,
    DropdownMenu,
    MenuItem,
    MenuSeparator,
    Toast,
    Modal,
    Toggle,
} from '@skbkontur/react-ui';


const KonturUIDemoPage =() => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    const handleShowToast = () => {
        Toast.push('Уведомление отправлено!', { label: 'Окей' });
    };


    return (
        <div>
            <header>
                <h1>Демонстрация компонентов Kontur-UI</h1>
            </header>


            <section>
                <h2>Кнопки</h2>
                <div>
                    <Button use="primary">Primary</Button>
                    <Button use="success">Success</Button>
                    <Button use="danger">Danger</Button>
                    <Button use="pay">Pay</Button>
                    <Button disabled>Disabled</Button>
                </div>
            </section>

            <section>
                <h2>Формы</h2>
                <div>
                    <Input placeholder="Введите текст" />
                    <Textarea placeholder="Введите длинный текст" rows={4} />
                </div>
            </section>

            <section>
                <h2>Выпадающее меню</h2>
                <DropdownMenu
                    caption={<Button>Открыть меню</Button>}
                    menuAlign="left"
                >
                    <MenuItem onClick={() => alert('Пункт 1')}>Пункт 1</MenuItem>
                    <MenuItem onClick={() => alert('Пункт 2')}>Пункт 2</MenuItem>
                    <MenuSeparator />
                    <MenuItem disabled>Пункт 3 (недоступен)</MenuItem>
                </DropdownMenu>
            </section>

            <section>
                <h2>Уведомления и модалки</h2>
                <div>
                    <Button onClick={handleShowToast}>Показать Toast</Button>
                    <Button onClick={handleOpenModal}>Открыть Модалку</Button>
                </div>
            </section>


            {isModalOpen && (
                <Modal onClose={handleCloseModal}>
                    <Modal.Header>Модальное окно</Modal.Header>
                    <Modal.Body>
                        <p>Это модальное окно. Здесь можно размещать любую информацию.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button use="primary" onClick={handleCloseModal}>
                            Закрыть
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}


            <footer>
                Сделано на <strong>React</strong> + <strong>Kontur-UI</strong>
            </footer>
        </div>
    );
}

export {KonturUIDemoPage};
