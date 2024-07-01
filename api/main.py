from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI()


app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")


@app.get("/chartline")
async def read_me():
    testdata={
        "1":"15",
        "2":"18",
        "3":"17",
        "4":"19",
        "5":"25",
        "6":"26",
        "7":"35",
        "8":"70",
        "9":"69",
        "10":"50",
        "11":"30",
        "12":"21",

    }

    return testdata