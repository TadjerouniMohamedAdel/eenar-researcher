// AboutMe.stories.js

import React from 'react';
import { AboutMeProps, NotDefineYet } from '../../utils/types/types';

import AboutMe from './AboutMe';
import { Story, Meta } from '@storybook/react';

//👇 This default export determines where your story goes in the story list
let user = {"id":"c8fd6213-da0e-40a9-8d00-6a62ab7a361f","email":"mohnagato@gmail.com","lastname":"تجروني","firstname":"محمد عادل","type":"researcher","gender":"male","center":"مركز الرؤيا للأبحاث الفلكية","job":"web developer","region":"16","status":"verified","city":"Kouba","address":"qwdwqdqwdwqdwqdqw","image":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCADIAMgDASIAAhEBAxEB/8QAHAAAAAcBAQAAAAAAAAAAAAAAAAECBAUGBwMI/8QAORAAAQMCBQIFAAgGAQUAAAAAAQACAwQRBQYSITFBUQcTImFxFCMyQlKBkcEVJDOhsdEINENicuH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAXEQEBAQEAAAAAAAAAAAAAAAAAEQEx/9oADAMBAAIRAxEAPwCytG1glhvdABLaFWoIDcWSgEYCPhALI0Y2QFrEoBex3UbieKxUTSNTS4De/RVXPOcqTBZmsml07cN3JWK5wztU408xUpdBTdd/U75QrRcweJWH000jPMfUvB4jOyr0vikzyJPLo3+YfshztvzWVG5KFkqL3R+JWKx1YfUshfBfdjRaw9irM3xVotbf5WpHc3Gyx4hBKVv0PinhhdG0VkouR9pvHytCwbMFJXUUUolBDvvAbH3Xj4/n7KdwnNWLYXEyKkqnCJnDHbhKV6/ikZK3Uxwc32S1kHhZn7+KTPpaxgjna0HY7O9wtfa4OaCNwRdFEUmxIXQ8JKBNkVkvZJOyArFIcF0PHCK36oOdiit7LqUkjZBycNkF0sghHEBLsiG6UgMI+qAQCAOOlpN7WF91T805tpcLhcZZmRs41dT8BSedMUZhOB1FQ4/ZabDi56BeWMexiqxitdPVPJ/C3oAiV2zZjMmOYvLUvJ8semMHo1Q1t0XXdKFrXKiCugCRsjtfqi4O6BRdcC4sQgG3BIHCGq1je6NriN/7IEHlElbk3sgR7oHGHVs1DVMmp3uY9pBu02uvTHhbm2LMOHuBDmSss1wceTbovLqtnh1mGbAsegs+1PM8Nka7j5VMetCNkSRTyiaBj2kODmg3CWjQEboijKB3KAkRG6UeUW/KBJCIhKRIE9UEdvZBCuQ34R9UQ9koXQGjRBDogz3xnqPJyrKdtjweDfb915o6rdPH6pl+hQQt1eW59zbhYWmpo2jU4AJZLBGW2Or5SQdNi07qSwTDHYnUtjHBO9lER0bHPc0MBLjxYJ2KOV7QQ2z7gBvdahQ5D0Uzo4mF7nNvrcLaUqXJAgqHUj9nua1zHcXVixlUtM+MmNwBc072XOCnkqHlsTS4jotBosmzSYnUU00mnyxqFj9r/acjKckL9NNTPLttQ0G5+CoRm7KWd0nlsje49gEVRTywtBljcw8bhehctZNp6ON1VUQgzvaAA4XsFXc+ZWjqqZ76dgbK0326qwjFTc7pUT9D2uHIIIS6mB9PM+OQFrmmxB5XHhRHrfw6xMYrlSiqAWH0Bpt0srR0WO/8fsWa7B58Oc4F7JC4A9AVsNyq0Vsh8okEA6IrfojCIjdAAiRodggIoIFBBwG/CMIumyUPhAYQJ2/ZAG3VFdBlvjhTVBy7JMwt8lrhqBG/PReegLutdenvGWndUZGrQzcsIfb2B3XmBNR0ZGZJQxjSSTawW5+FmVII6ZlTOwlxFxfusay/pditOx59LngFencsxtp6SNrTdtgUwxNU2FvezTy++oFvbsnTsEgq49MrPX3I3H5p/hshbuN1JxB2vYcoqqtyhAxzpQXF7d2uO5CcUOEthkMjyS4dwBb8lby3THvyVGPgcXEnqUEJXRsAOlVTFoWuDrhXespJCDZuyreK0UhY7ZDXm7xDp/Kxp7wAGuVUWneIeGmbX6bStN/kLMxtcW9lEaJ4IB7c2ska8BoGlzL2vdel73Xn/wD4+xxyYtWlwBc1otdb8FVzhYQuiv3QCAweqHVD4QF0BFBHdDqgCCHIQQN/ZK45SAlIAj6JKO6CNzFQNxPCKmkfbTIwtO3svIVfTOpK2eneLOjeWkfC9mncHtZeX/FzCzh2cqtwaRFOfMae/dE1XcuQPmxenDAdnXuvSGWJi6ljbc7ABef8hvDMdZqGq4IstTw7OFDhlQ6BzZJJA6x0tNmphjasK9TRurBCBYWKxiTxOgpqcOZRTPA7EBNaLxgfLUhpp/LZe1jyi1vFr87rnIYmAueQAOpVYyvmaPF4AW9dvhVrxHxOsbQyw0spYXelpB4QTOas84Ng8JElTG6QcMabkrL8Xz/iGMHRhdHIyMmwcOVUanA5YY58QqIpat0Q1uaeGjuVxy9NiGNuqhDVtpPJZrY0Nu23a4KUOMVbjMlRC6utJG/0k6bELN8WpzTYjPERbS5bPl6SXEqHy6uzpYjYu6O91m2e6Ux5idFGPVJYD3uojRf+O1D9ViVa4Hctjbt+q2tVfw8wJmA5XpKUAeYWh8p7uPKs4VXCkLovhBAoFHuk3QBugUjHuiR3QAIIIIGw90Y9ikgoXQKRJN0d0CtlnHi9lCTH8OFVQgfS6YEhv4m9QtGvsucwD4ntIuCCENeZPC6lbJmGRkos5jCPg3VzzRhb8GZNVUlMHukdcEi4uoDBx/CM+1kRbp1Pd/lbJHAzEqUNe0OaR1UTGNYngtfU0FPUwVZnL/6sLLMLfYK5YFlmkp8EpfNidJiBBdLfcW6blXSly1BGQ4Rjf2U9Dg8LYiPLHG/uqRW/DthpsUnhIIZsWhOfEGnc6aMtvbUneCtbFj1miwvpUjneAaQ63BRVVgpZZqd7IX6mSgiRjgN7qOp8ox0xeIIhG159Qb1V0yzE2eMEAagp2Si6uAQZ2zChRRfVMtbnZZVnClMmccMLW3LpBf8AIrfsZDIoHDrZZpS4S7Fc2Qua3aG5LiOLoa1Wn/6eP/1C6pLG6WtHYWRoFBAc7Ikd0ARjdF8I0Chsj2SEpAaCIoIGoKF0m97I0Bo77JI4RoFEiyBsQb9USF0Gb58ynC2pGK0ILZx9sHcH/Sl8m14kpmNdvYWKtlVE2anfG9ocHC1lnFNE/B8ZfTuBa1xu3dBrVJ5crALAhSXkB7drWAVewGbzGNN+ispe1sIsgo8UZbmSVjOGG91asfpRV4aHW5bZVTFq5mF4m6WRpc15uCCph+aqd+DOjsCbXA6oInJsr6PEX08ti1x9KvFVodHZvJWRYbmCB2MuL5GtkYbtA4CusWPwOjGqVlyO6BlmcGOJ9uygsjxgz1kpHq1AXT7MlcySmc5rr3THJGotlINwX3ItwguF90L8pKNArjqjuEm6A2QKQuiuggWCjCQEoWugVdBF/hBAzBQvuk9dkEC7oApAO6UOECwiJ6IlxqqhlPGXv+AO5Qdy7bfZUPOLXPxJk0ADvK3JCv2C5anxzXLXVElOy12xM7e66Py3TeRUUtMwE2IBd1PugreWMRaY23NtlMYhmCKGN7dYLwPshUdhOH4hLSm7XxO0lpTh1IKiUy6rOcLBBwxw1WPQubCQwDgnun+EUbKPDPKrKmNz3CxF+FXpocTin8uSpIjvtZmymabAo6ul11OIP/IhqIruJU2F0tc+eKR+nfbuVxpicTJZAHtY377jYqSxPBaSN4ZSPMr/AMbje35pVNTChj0M5vdxQKqddNQxwSSF5HU8lW7KZhbhjC1wBdy07G6psMUuI1w07sjNyrxHhMUlAyrj9YuRIG7W9wipf/CCjG0NXG0Po6hxYeGv3H6ojV10JtPTNf7sKCUJPThBMIsUic7TKx8Lv/MbJ81wcAW7g8FAq6MFIujQLv2SgeiQEYKBd0Em/ZBAyBQuk33QugUley533SKqoEEReQSeAB1KAqurZTMsfU92zWDkqRwPB5HysrMRjdLIf6cQb6WDufdTOTMtsa5tfigD6p/qYx3DB/taDHADYtaLDjZBWYmOoQHlpaHtLQD3TWgh+tJI3J3VpxalaaUF9td7gdlD0kVj+aCqZuyPT1xkxClaWVlr7cO+Vmgc6GZ8LwWyMNnNPIXpGGMOaARtZZl4l5RbMXV1ECypZvdu2odkIojGSS9AQinwyWeB3lyujJ22URT5ijoKnyK06H8B1tikz5yp9bwJAGA2b3JRE2zDIaSlFnmSXq4qKxSRkUJII91XsQzvA5rtLj252UOzGpMembBSg6GH1utygtOTcRc6vraaQBonF4ifbotYyvFbDXMN7dVm2UcMBxmElu8bS79lqmHyRUELmuaSTuionF6eow2QOY5/0R/IH3T/AKTCQF7bkk33vdXKqkjnpbO+y5pvfoqpBG17Ls+z27IImSCVxNi7T26LrQ1M9K/S5pfF2HT4UxTxAvINrFKgorzvaB02QhUb2yMa9hu07hLCZRP+izmGQaWuN2H37J3dAsIwkA7JQO10Cx2QSQUEDJAJIKBIAuTsgNzgxpc42A6rvlildieJiqkZemh3YD953dR9FTyYxVaG3FIw+o/jPYLTcv4V5MAcW6GDayBxHUsls2QeW8cFSkGKxUzQ2WRrh0smlThcdTu57vbSbKPmwUs/pO1+ztigmamoFWwvjcDc8JvCwNALrBRVGPosx80vbYfZKeTNNXAPKNjy0A7XQOH43BFMYIwXygXHQH80zxCvlqY3Mmpx5ZFjZMaijkkALvRMxIjrJoz5czSSNroM/wA5eG9JjMRmoXubI0kiOXa562KxnFfDPGY6h4pqhoF92PJBavWVmTx7t/VQ2OYNFVsL42aaoD0P7+x7oPL1J4W1stzWVgb6uGjlXujyxS4Hh0cVI25uNTjyVbqmN8Ejo52Fko6H9lxmAlYBZEgsmU98TkJHDP3WhzYe2ehLgLPHCqeUoA2ukDRclv7rQ4fSwRuGxRcVMv0O+j2sQPUe6jRB9HqXstZrt2qcx+ndT1rHNGx3CbPjbPGCdnN4KBjTsvK/2UtgsGuqAcL7XCioyYqh9+uysuAQEkPIQQePUDHbdi78lGwh7W+XJu5u1+/urLjbLzStb925PyVX60+XUxsIsXMuPyQF0Rt4SRwjBQLBN0Em9gggZAi65fRqjEaptLT+lnMjuzUu6m8rQHypZD/3H/2CCy5ewmmooImMAsONlcKcxGMMNrDpwq9QxOYAWbeyloZRxILX68hMDyShudUDyw9uQuLhNGbVEYe38TV0a54DTC4Ob+EruycPOh40uPQ9VRF1tHFUxH7zOh+81NMJi+jTup5hc8sd3U1LEA4ujHz7JpUQ62bbSN3Yf2QcMQpjJd8e0jf7pnHA2obfbUOQeQpWKTzoQ63qGxUdPGW1RMfpfa/yoEso3g2ACKejfY2F7b3Cd0tQHnS7Z45CdHcWQVHGcGixSnBLdMzRseoKz+sp5aKodBOwte3+616dvk1Ad908qJzLg8OJQOGm0o3a+24/+IKjktuvE3nsy5/VXrQJG/CpeVad9JXVkErdMgAB+FdKSJzGnSQQfUT2QQWYJLyxw3vpF9+ij4jY2K6V8v0iqklHGrb4RxwFzmneyCNlH8w6yumAR6aRp68qqVEQbWWCuWEs0ULPhBCYkPMrZWNFy59z8BVrMsZ+mx+X9qJosrhDGDPUzO6OKrVewTVTnX67lBGxvDmBw4O6XdR7Hvp53NebxPcdB7eyeNdcCxQdQUEm4IG6CBn0Vvy9EGUUI9t1TwVdsEINLH2sgstI2zQRupBrWub6mj54UZSOcyxG4UlDOx2xNigV5AH9NxBROc8NtK3W325XcNFrtNwgeN0HCKoDdi67O/UfKcEBwuDseD2TaaNjvY9wudJK6CXypN2n7JVwKP1VRqtZkmzh2cuOIjypoZRxexT6pYHki9mydezgo3EHOdRljwQ9pTQmrhJAlh2eN/lLoasS+h+zgl0zxJTtPcbqOrGGCYSsFhdQP6+PzIj36I6OT6RTAO5b6SlRStnhBBG6ZUchgxF8Z2a//KBlU4W/+MQzxDZwMbvjkJ7iwbQUflsP1kotfsOqmXAaA+w1NVZzBUedXll9o2gfugrrIyZ9Leqk3N8qJo4KFHDpf5hF77JOISeqwQRMh11wv3VzpgI6KMeypQP8435Vxkfoo/hl0wMmu10r9I2ublQNVaOnldZS9C/VRfJKjcSa3SyL8TrlBBVlH5mFENH1jfrAfcKLpKi7QCVcaaMSNkJFmaSB+iz9jy2WVp9JjeWkfmgnmOBAQUfT1BJsSgg6NPBVzy+7+Wjv2CCCC0UjlJNYyRvqaCgggWyIMPoe4exN12BB2d+oQQVHKaIuF2bj2TF5OoMf+XsggoHMUvmMfG77bd1zrh5kTHW+UEFQ1w4kMcw/dNl2njEjC09QggoI6ke6nmMTvspOIu0VULx8IIIJmKYPpy7paxVPxJzv4lIRezigggftZ5dMCebKEqJDJK63RBBAyvasj7XCs2LTiHDJHn8ICCCBphzm/wAPY4OuLKKeTU1rj0BsEEEEtHEGsazus1xuF1NXyVDR9W95Y/2N9iggg4RuIIsUEEER/9k=","createdAt":"2021-06-29T10:43:06.601Z","updatedAt":"2021-07-11T08:12:59.309Z","researchers":{"id":"02d0c96f-9bfa-4c17-964c-b4be22f83df9","aboutMe":"خلافاَ للاعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد، مما يجعله أكثر من 2000 عام في القدم. قام البروفيسور \"ريتشارد ماك لينتوك\" (Richard McClintock) وهو بروفيسور اللغة اللاتينية في جامعة هامبدن-سيدني في فيرجينيا بالبحث عن أصول كلمة لاتينية غامضة في نص لوريم إيبسوم وهي \"consectetur\"، وخلال تتبعه لهذه الكلمة في الأدب اللاتيني اكتشف المصدر الغير قابل للشك. فلقد اتضح أن كلمات نص لوريم إيبسوم تأتي من الأقسام 1.10.32 و 1.10.33 من كتاب \"حول أقاصي الخير والشر\" (de Finibus Bonorum et Malorum) للمفكر شيشيرون (Cicero) والذي كتبه في عام 45 قبل الميلاد. هذا الكتاب هو بمثابة مقالة علمية مطولة في نظرية الأخلاق، وكان له شعبية كبيرة في عصر النهضة. السطر الأول من لوريم إيبسوم \"Lorem ipsum dolor sit amet..\" يأتي من سطر في القسم 1.20.32 من هذا الكتاب.","userId":"c8fd6213-da0e-40a9-8d00-6a62ab7a361f","birthday":"1997-02-24T00:00:00.000Z","webSite":null,"createdAt":"2021-06-29T10:47:22.369Z","updatedAt":"2021-07-11T08:12:59.318Z"},"admins":null}
export default {
    component: AboutMe,
    title: 'Components/AboutMe',
    argTypes:{
        user:{
            defaultValue:user,
            description:"The current user connected",
            name:"user"
        }
    }
  } as Meta;
  

//👇 We create a “template” of how args map to rendering
const Template:Story<AboutMeProps> = (args) => <AboutMe {...args}/>;

export const FirstStory = Template.bind({});
