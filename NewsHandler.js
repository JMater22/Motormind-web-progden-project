class NewsHandler{
    constructor() {
this.dates = [
    '2024 JAN 1',
    '2023 DEC 28', 
    '2023 DEC 29',
    '2023 JAN 1',
    '2023 FEB 15',
    '2023 MAR 10',
    '2023 APR 5',
    '2023 MAY 20',
    '2023 JUN 7',
    '2023 JUL 3',
    '2023 AUG 18',
    '2023 SEP 12',
    '2023 OCT 29',
    '2023 NOV 14',
    '2023 DEC 23',
    '2023 JAN 8',
    '2023 FEB 22',
    '2023 MAR 17',
    '2023 APR 1',
    '2023 MAY 16'
];
this.images = [
    "https://akm-img-a-in.tosshub.com/indiatoday/images/video/202305/whatsapp_image_2023-05-24_at_8.45.40_pm-sixteen_nine.jpeg?VersionId=bF6UJQPtq5KUhGsUi.OHP8j1UmjGouWP",
    "https://th.bing.com/th/id/OIP.cKXVh0i1nnM9_tyX_vmOcQHaEK?rs=1&pid=ImgDetMain",
    "https://image.businessinsider.com/568191fde6183e55008b5360?width=1200&format=jpeg",
    "https://www.carnewshere.com/wp-content/uploads/2021/07/Find-Out-Facts-With-Car-News-1170x650.jpg",
    "https://carsguide-res.cloudinary.com/image/upload/f_auto%2Cfl_lossy%2Cq_auto%2Ct_default/v1/editorial/181129b9682hr.jpg",
    "https://th.bing.com/th/id/OIP.arX4wtvKaQoNsKkQppEQ5gHaEK?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th?id=OVFT.zZ5HAekIb8LDXYpzXXog-i&pid=News&w=197&h=112&c=14&rs=2&qlt=90&dpr=1.3",
    "https://i.ytimg.com/vi/1i1k4IHbsMc/maxresdefault.jpg",
    "https://i.ytimg.com/vi/v8EqQHLaUFc/maxresdefault.jpg",
    "https://th.bing.com/th/id/R.8e5680108f5708dab1b257634c24bd0d?rik=WRrn0xd4KUAsLg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-YUGHOT2psVI%2fT8gYzlzxnEI%2fAAAAAAAALd0%2f_giSZSTXbRw%2fs1600%2f1200291ccl-copy.jpg&ehk=AR9HvDe9C%2bZTSpG11YfiWZN3cOFr%2bjCtsLBEfbX3tBQ%3d&risl=&pid=ImgRaw&r=0",
    "https://lh3.googleusercontent.com/proxy/9ivk09xGu4hEkb5bazLfLZbPlfi43PJudLBN9Y3jufpG62_DzdzoOaSP2QxrhIjb7iKvJpDEnj6u4O9Z23jVtRigMPW4mAZdzLWmhBpLwySIY4DoFNgmindAO2NFxdQNnFfU29EI3bpSCg=w1200-h630-p-k-no-nu",
    "https://i.ytimg.com/vi/SdrjUlmTGL0/maxresdefault.jpg",
    "https://lh5.googleusercontent.com/proxy/x6rWCP14i7P0EoyoItgQhej-qDbbUeP5qZaFKIlScmqz5DtueObgVVLEN03qN0LDDQyeWAf3s6w0nfs90bQLRd_vSzIDghc9d0kD8M1iRIW4t41GthJ-I9aEch1HRF7dKWs=w1200-h630-p-k-no-nu",
    "https://th.bing.com/th/id/R.4601a92b9f6cd950394a8ac25aa67c4d?rik=JSu5a2XrJlA41w&riu=http%3a%2f%2fi.infocar.ua%2fimg%2fnews-%2f78489%2ffoto2_004.jpg&ehk=XZsrUWE%2f76LmWvC0x%2fNdinfE38PPDbK2qYByOYpf5GY%3d&risl=&pid=ImgRaw&r=0",
    "https://2.bp.blogspot.com/_pIfFF1ij3Vw/TEDf4W-uV3I/AAAAAAAAAgQ/TKjW1nQA2KQ/s1600/Vehicle+in+the+news.jpg",
    "https://2.bp.blogspot.com/-vU5Dl-Rmv1U/TiRXmq2hT_I/AAAAAAAADSI/DYUkkSLEON8/s1600/News%2BConcept%2BCars%2B%25286%2529.jpg",
    "https://media.wired.com/photos/593108ea78087a50b317346c/16:9/w_2400,c_limit/Trezor-HP.jpg",
    "https://www.sportyou.es/noticias/wp-content/uploads/2016/01/Zenvo-ST1.jpg",
    "https://www.buildingsofireland.ie/building-images/niah/images/survey_specific/fullsize/30407106_1.jpg",
    "https://cdn.houle.co.uk/images/Property/large/4/2016/6/22/maes-llyn-uchaf-000020031_6872591_IMG_09.jpg"
    ];
}

getNumberForRn(relatedNewsIndex, num) {
 


    const getRandomIndex = () => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * this.images.length);
        } while (randomIndex === num || relatedNewsIndex.includes(randomIndex));
        return randomIndex;
    };

    for (let x = 0; x < 3; x++) {
        const randomIndex = getRandomIndex();
        relatedNewsIndex.push(randomIndex);
    }

    return relatedNewsIndex;
}


    getImage(index){
        return this.images[index];
    }
    setDate(dataArray, relatedNewsIndex){
        for(let i = 0; i < 3; i++){
            let index = relatedNewsIndex[i];
            dataArray[i] = this.dates[index];
        }
        return dataArray;
    }

    setImg(dataArray, relatedNewsIndex){
        for(let i = 0; i < 3; i++){
            let index = relatedNewsIndex[i];
            dataArray[i] = this.images[index];
        }
        return dataArray;
    }
}