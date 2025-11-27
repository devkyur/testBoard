const questions = [
    {
        question: "주말에 에너지를 얻는 방법은?",
        answers: {
            A: "친구들과 만나서 놀기",
            B: "집에서 혼자 쉬기"
        },
        type: "EI"
    },
    {
        question: "새로운 사람을 만났을 때",
        answers: {
            A: "먼저 말을 걸고 대화를 시작한다",
            B: "상대방이 먼저 말을 걸 때까지 기다린다"
        },
        type: "EI"
    },
    {
        question: "정보를 받아들일 때",
        answers: {
            A: "구체적인 사실과 세부사항에 집중한다",
            B: "전체적인 그림과 가능성을 본다"
        },
        type: "SN"
    },
    {
        question: "일을 처리할 때",
        answers: {
            A: "정해진 방법대로 차근차근 진행한다",
            B: "새로운 방법을 시도하고 창의적으로 접근한다"
        },
        type: "SN"
    },
    {
        question: "결정을 내릴 때 중요한 것은?",
        answers: {
            A: "논리적이고 객관적인 분석",
            B: "사람들의 감정과 관계"
        },
        type: "TF"
    },
    {
        question: "친구가 고민을 털어놓을 때",
        answers: {
            A: "해결책을 제시하고 조언한다",
            B: "공감하고 감정을 이해해준다"
        },
        type: "TF"
    },
    {
        question: "갑자기 생긴 자유시간에",
        answers: {
            A: "미리 계획한 일을 한다",
            B: "그때그때 하고 싶은 일을 한다"
        },
        type: "JP"
    },
    {
        question: "여행을 갈 때",
        answers: {
            A: "일정을 미리 상세히 계획한다",
            B: "대략적인 계획만 세우고 즉흥적으로 움직인다"
        },
        type: "JP"
    },
    {
        question: "업무 마감이 다가올 때",
        answers: {
            A: "미리미리 끝내고 여유를 갖는다",
            B: "마감 직전까지 시간을 활용한다"
        },
        type: "JP"
    },
    {
        question: "파티에서 나는",
        answers: {
            A: "여러 사람들과 두루두루 대화한다",
            B: "소수의 친한 사람들과 깊은 대화를 한다"
        },
        type: "EI"
    }
];

const personalityTypes = {
    ESTJ: {
        name: "경영자형",
        description: "실용적이고 현실적이며 사실적입니다. 체계적이고 논리적으로 일을 처리합니다.",
        traits: [
            "뛰어난 조직력과 관리 능력",
            "명확한 기준과 원칙 중시",
            "책임감이 강하고 성실함",
            "효율적이고 실용적인 접근"
        ]
    },
    ESTP: {
        name: "활동가형",
        description: "현실적이고 실용적입니다. 순간의 즐거움을 추구하며 활동적입니다.",
        traits: [
            "빠른 문제 해결 능력",
            "모험을 즐기고 도전적",
            "현실적이고 실용적",
            "융통성 있고 적응력이 뛰어남"
        ]
    },
    ESFJ: {
        name: "친선도모형",
        description: "동정심이 많고 다른 사람에게 관심이 많습니다. 협조적이고 친절합니다.",
        traits: [
            "따뜻하고 배려심이 많음",
            "조화로운 관계 추구",
            "책임감 있고 성실함",
            "타인의 필요에 민감"
        ]
    },
    ESFP: {
        name: "사교적인 유형",
        description: "사교적이고 활동적이며 수용적입니다. 주변 사람들에게 즐거움을 줍니다.",
        traits: [
            "긍정적이고 낙천적",
            "즉흥적이고 자유로움",
            "사람들과 어울리기 좋아함",
            "현재를 즐기는 삶의 태도"
        ]
    },
    ENTJ: {
        name: "지도자형",
        description: "통솔력과 결단력이 있습니다. 장기적인 비전을 가지고 체계적으로 실행합니다.",
        traits: [
            "강한 리더십과 결단력",
            "전략적 사고와 계획",
            "목표 지향적이고 효율적",
            "논리적이고 분석적"
        ]
    },
    ENTP: {
        name: "발명가형",
        description: "창의적이고 독창적입니다. 새로운 가능성을 탐구하고 도전합니다.",
        traits: [
            "창의적이고 혁신적",
            "지적 호기심이 많음",
            "논쟁과 토론을 즐김",
            "빠른 적응력과 융통성"
        ]
    },
    ENFJ: {
        name: "언변능숙형",
        description: "타인의 성장을 돕는 것을 좋아합니다. 이상주의적이고 헌신적입니다.",
        traits: [
            "카리스마 있고 영향력 있음",
            "타인에 대한 깊은 이해",
            "조화와 협력 중시",
            "이상주의적이고 열정적"
        ]
    },
    ENFP: {
        name: "스파크형",
        description: "열정적이고 창의적입니다. 새로운 관계와 경험을 추구합니다.",
        traits: [
            "열정적이고 활기찬",
            "창의적이고 상상력 풍부",
            "사람들에게 영감을 줌",
            "자유로운 영혼"
        ]
    },
    ISTJ: {
        name: "세상의 소금형",
        description: "신중하고 조용하며 집중력이 강합니다. 책임감이 강하고 철저합니다.",
        traits: [
            "체계적이고 조직적",
            "신뢰할 수 있고 책임감 강함",
            "전통과 규칙을 존중",
            "현실적이고 실용적"
        ]
    },
    ISTP: {
        name: "백과사전형",
        description: "조용하고 과묵하며 논리적입니다. 도구를 다루는 능력이 뛰어납니다.",
        traits: [
            "논리적이고 분석적",
            "문제 해결 능력 뛰어남",
            "독립적이고 자율적",
            "실용적인 기술 선호"
        ]
    },
    ISFJ: {
        name: "임금 뒤편의 권력형",
        description: "조용하고 친절하며 책임감이 강합니다. 헌신적이고 인내심이 많습니다.",
        traits: [
            "헌신적이고 성실함",
            "세심하고 배려심 많음",
            "전통과 안정 중시",
            "타인을 돕는 것을 좋아함"
        ]
    },
    ISFP: {
        name: "성인군자형",
        description: "따뜻하고 온화하며 겸손합니다. 자신만의 가치관을 중요시합니다.",
        traits: [
            "온화하고 친절함",
            "예술적 감각이 뛰어남",
            "자유롭고 유연한 사고",
            "조화로운 환경 선호"
        ]
    },
    INTJ: {
        name: "과학자형",
        description: "전략적 사고를 가진 완벽주의자입니다. 독창적이고 독립적입니다.",
        traits: [
            "전략적이고 체계적",
            "독립적이고 자율적",
            "높은 기준과 완벽주의",
            "통찰력 있고 분석적"
        ]
    },
    INTP: {
        name: "아이디어 뱅크형",
        description: "논리적이고 분석적입니다. 지적 호기심이 많고 이론적입니다.",
        traits: [
            "논리적이고 객관적",
            "지적 호기심이 많음",
            "창의적인 문제 해결",
            "독립적이고 자율적"
        ]
    },
    INFJ: {
        name: "예언자형",
        description: "통찰력이 뛰어나고 이상주의적입니다. 깊이 있는 관계를 추구합니다.",
        traits: [
            "통찰력 있고 직관적",
            "이상주의적이고 원칙적",
            "깊이 있는 인간관계 추구",
            "창의적이고 독창적"
        ]
    },
    INFP: {
        name: "잔다르크형",
        description: "이상주의적이고 충성스럽습니다. 자신의 가치관을 중요시합니다.",
        traits: [
            "이상주의적이고 순수함",
            "깊은 감수성과 공감능력",
            "창의적이고 상상력 풍부",
            "진정성 있는 삶 추구"
        ]
    }
};

let currentQuestion = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const answerBtns = document.querySelectorAll('.answer-btn');
const currentQuestionElement = document.getElementById('current-question');
const progress = document.getElementById('progress');

startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);

answerBtns.forEach(btn => {
    btn.addEventListener('click', () => selectAnswer(btn.dataset.value));
});

function startQuiz() {
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];
    questionText.textContent = question.question;
    answerBtns[0].textContent = question.answers.A;
    answerBtns[1].textContent = question.answers.B;
    currentQuestionElement.textContent = currentQuestion + 1;
    progress.style.width = ((currentQuestion + 1) / questions.length * 100) + '%';
}

function selectAnswer(answer) {
    const question = questions[currentQuestion];
    const type = question.type;

    if (answer === 'A') {
        scores[type[0]]++;
    } else {
        scores[type[1]]++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        setTimeout(() => {
            showQuestion();
        }, 200);
    } else {
        setTimeout(() => {
            showResult();
        }, 200);
    }
}

function showResult() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');

    const personality = calculatePersonality();
    const result = personalityTypes[personality];

    document.getElementById('result-type').textContent = personality;
    document.getElementById('result-desc').textContent = result.name;

    const traitsList = document.getElementById('result-traits');
    traitsList.innerHTML = '';
    result.traits.forEach(trait => {
        const li = document.createElement('li');
        li.textContent = trait;
        traitsList.appendChild(li);
    });
}

function calculatePersonality() {
    let personality = '';
    personality += scores.E >= scores.I ? 'E' : 'I';
    personality += scores.S >= scores.N ? 'S' : 'N';
    personality += scores.T >= scores.F ? 'T' : 'F';
    personality += scores.J >= scores.P ? 'J' : 'P';
    return personality;
}

function restartQuiz() {
    currentQuestion = 0;
    scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}
