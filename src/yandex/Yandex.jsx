import { TopNews } from "./topNews/TopNews"
import { CategoryNews } from "./topNews/CategoryNews/CategoryNews"
import { Article } from "./topNews/Article/Article"

export function Yandex (){
    return(
        <div className="container">
            <CategoryNews category = {"Сейчас в СМИ" }>
                <TopNews category = {"Сейчас в СМИ" } news = {"Упростил"}>
                    Иконка
                </TopNews>
                <TopNews category = {["Сейчас в СМИ", "В германии"] } news = {["Упростил",'В команде']}>
                Иконка
                </TopNews>
            </CategoryNews>
            <CategoryNews category = {"Сейчас в СМИ" }>
                <TopNews category = {"Сейчас в СМИ" } news = {"Упростил"}>
                    Иконка
                </TopNews>
                <TopNews category = {["Сейчас в СМИ", "В германии"] } news = {["Упростил",'В команде']}>
                Иконка
                </TopNews>
            </CategoryNews>
            <Article header={'Заголовок'} desk={'Описание'}>
                Картинка статьи
            </Article>
            <Money moneyChange={'Тут курсы и индексы'}>

            </Money>
            <Search>

            </Search>
            <Banner>

            </Banner>
            <Bottom>

            </Bottom>
        </div>
    )
}