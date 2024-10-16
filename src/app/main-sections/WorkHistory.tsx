import styles from "@/app/main.module.scss"
import { WorkBranch } from "@/components/ui/work-branch/WorkBranch";

const history = [
    {
        text: [
            "Проект представляет собой интернет-магазин техники Apple написанный на React.js + Redux TK",
            "",
            `Роутинг React-router-dom,\n\nСтраница с товарами и работа с API с помощью клиента Axios,\n\nСтраница товара,\n\nКорзина с использованием Redux-persist для сохранения корзины в localstorage,\n\nТрейд-ин (расчет стоимости б/у девайса),\n\nRedux/ReduxToolKit. Асинхронные экшены Redux-thunk`,
            "т.к. это был мой первый E-commerce проект, было затруднительно реализовать работу с API, а так же было затруднительно работать со slice в Redux TK"
        ],
        text_block_title: ["О проекте", "", "Что реализовал?", "Сложности"],
        color_text: "#4024ef",
        title: "IPhoner",
        date: "Август 2022 - Октябрь 2022",
        role: "Frontend developer",
        color_title: "var(--branch)",
        color_title_logo: "#4024ef"
    },
    {
        text: [
            "Компания занимается оптовой торговлей шихтовыми материалами и стояла задача реализовать сайт для компании и платформу для обучения сотрудников",
            `Первые полтора месяца занимал роль фронта работая над сайтом.\n\nЧерез месяц ушёл один из Backend-еров и я занял его роль, параллельно работая с фронтом\n\nПосле завершения разработки сайта мы начали работать над платформой для обучения, где занимал роль Fullstack`,
            `Познакомился с Next-ом и ISR в нём, Sass, RTK Query, TypeScript.\nНа backend-е познакомился с Express.js (роутинг, обращения к бд, создание эндпоинтов и сервисов), Firebase.\n\nПолучил опыт работы в команде и использования Git\n\nСамое сложное было изучить и понять принципы работы backend-а`,
            ""
        ],
        text_block_title: ["О Компании", "Роль", "Что нового?", ""],
        color_text: "#5ABB47",
        title: "mervice",
        date: "Ноябрь 2022 - Январь 2024",
        role: "FullStack developer",
        color_title: "var(--branch)",
        color_title_logo: "#5ABB47"
    },
    {
        text: [
            "",
            "Попал на стартап проект, задачей которого было разработать веб-приложение, для планирования задач и расписания, а так же для управлением своим временем по средствам pomodoro timer",
            `1. Backend разработка: Разработка на Nest.js, создание и документирование RESTful API, JWT авторизация с использованием Cookie.\n\n2. Работа с базами данных: Использование Prisma и PostgreSQL.\n\n3. Frontend: Обеспечил обращение к API через Interceptor axios с авторизацией через access_token и создал dnd функционал. Настраивал сервисы для API, взаимодействуя с ними через Tanstack Query`,
            "Довольно долго разбирался с JWT авторизацией и interceptor-ами"
        ],
        text_block_title: ["", "Стартап", "Чем занимался?", "Трудности"],
        color_text: "#dc03e4",
        title: "Task Sync",
        date: "Январь 2024 - Июль 2024",
        role: "Fullstack developer",
        color_title: "var(--branch)",
        color_title_logo: "#dc03e4"
    },
    {
        text: [
            "Стартап проект, задачей которого стояла создать сервис, для продвижения личного бренда врачей",
            `В основном работал на Backend-е и с сервером на nginx.\nНа Frontend-е помогал с jwt авторизацией и созданием настроек в профиле врача`,
            `Backend: Реализация jwt авторизации, интеграция с Plusofon для авторизации через телефон, создание эндпоинтов и сервисов для врачей и обычных юзеров, работа с файлами.\n\nНастройка сервера, настройка SSL протокола.\n\nFrontend: Настройка middleware, jwt авторизации и страница авторизации через телефон`,
            "На проекте я был lead-ом по совместительству, т.к. был самым опытным на проекте. Распределял задачи, выстраивал дальнейшую работу команды, обучал пару сотрудников Nest-у."
        ],
        text_block_title: ["О проекте", "Роль", "Задачи", "Доп. задачи"],
        color_text: "#D83131",
        title: "the medik",
        date: "Июль 2024 - Ноябрь 2024",
        role: "",
        color_title: "#D83131",
        color_title_logo: "#fff"
    },
]

export function WorkHistory() {
    return (
        <section className={styles.work_history}>
            {history.map((item, index) => {
                const textGroups: string[][] = item.text.reduce<string[][]>((acc, text, idx) => {
                    const groupIndex = Math.floor(idx / 2);
                    if (!acc[groupIndex]) {
                        acc[groupIndex] = [];
                    }
                    acc[groupIndex].push(text);
                    return acc;
                }, []);

                return (
                    <WorkBranch {...item} key={index}>
                        {textGroups.map((group, groupIndex) => (
                            <div className={styles.block} key={groupIndex}>
                                {group.map((text, textIndex) => (
                                    <div className={styles.text_block} key={textIndex}>
                                        <h1
                                            className={styles.title}
                                            style={{ color: item.color_text }}
                                        >
                                            {item.text_block_title[
                                                groupIndex == 1 ?
                                                    groupIndex + textIndex + 1
                                                    : groupIndex + textIndex
                                            ]}
                                        </h1>
                                        <p
                                            className={styles.text}
                                            style={{ color: item.color_text }}
                                        >
                                            {text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </WorkBranch>
                );
            })}

        </section>
    );
}
