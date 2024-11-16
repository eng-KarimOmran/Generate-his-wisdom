var QuoteList =[
    {QuoteName:"Oscar Wilde",
        Quotewisdom:"Be yourself; everyone else is already taken.",
    },
    {QuoteName:"Mark Twain",
        Quotewisdom:"Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).",
    },
    {QuoteName:"Albert Einstein",
        Quotewisdom:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    },
    {QuoteName:"Mahatma Gandhi",
        Quotewisdom:"Live as if you were to die tomorrow. Learn as if you were to live forever.",
    },
    {QuoteName:"Thomas A. Edison",
        Quotewisdom:"I have not failed. I've just found 10,000 ways that won't work.",
    },
    {QuoteName:"William Shakespeare",
        Quotewisdom:"The fool doth think he is wise, but the wise man knows himself to be a fool.",
    },
]
var lnthitem = QuoteList.length - 1;
var PreviousNumber = 1;
var NumRandomness = 1;
function SwitchcardQuote(){
    while(PreviousNumber == NumRandomness){
        NumRandomness = Math.round(Math.random() * lnthitem);
    }
var cardQuote = `<div class="QuoteDesign col-12 col-md-9 col-lg-6 rounded-5 bg-white mx-auto flex-column align-items-center d-flex" id="QuoteDesign">
                    <div class="w-75 d-flex justify-content-center align-items-center rounded-pill bg-danger bg-NameAuthor">
                        <span class="text-center text-white NameAuthor" id="NameAuthor">${QuoteList[NumRandomness].QuoteName}</span>
                    </div>
                    <div class="my-auto px-4">
                            <div class="d-flex flex-column">
                                <i class="fa-solid fa-quote-left text-start p-2"></i>
                                <p class="text-center text-dark PQuote px-5" id="NameAuthor">${QuoteList[NumRandomness].Quotewisdom}</p>
                                <i class="fa-solid fa-quote-right text-end p-2"></i>
                            </div>
                    </div>
                </div>
`;
document.getElementById("datacard").innerHTML = cardQuote;
PreviousNumber = NumRandomness;
}
function NewQuote(){
    SwitchcardQuote();
}