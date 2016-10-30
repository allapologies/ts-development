type sliderOption = { element: HTMLElement }

class Slider {
    protected slider: HTMLElement
    protected roller: HTMLElement
    leftBorder: number
    rightBorder: number
    protected shiftX: number
    protected isDrag: boolean = false

    constructor(options: sliderOption) {
        const { element } = options
        this.slider = element
        this.roller = <HTMLElement>this.slider.querySelector('.roller')
        let sliderRect = this.slider.getBoundingClientRect()
        this.leftBorder = sliderRect.left
        this.rightBorder = sliderRect.right - sliderRect.left - this.roller.getBoundingClientRect().width
        this.slider.addEventListener('mousedown', this.onMouseDownHandler)
    }

    protected onMouseDownHandler = (e:MouseEvent):void => {
        let target = <HTMLElement>e.target
        if (!target.classList.contains('roller')) {
            return
        }
        this.shiftX = e.pageX - this.roller.getBoundingClientRect().left
        document.onmousemove = this.onMouseMoveHandler
        document.onmouseup = this.onMouseUpHandler
        this.isDrag = true
    }
    
    protected onMouseUpHandler = ():void => {
        this.isDrag = false
        document.onmousemove = null
        document.onmouseup = null
    }

    protected onMouseMoveHandler = (e:MouseEvent):void => {
        if (!this.isDrag) {
            return
        }
        let rollerPosition = e.pageX - this.shiftX - this.leftBorder
        if (rollerPosition >= this.rightBorder) {
            this.roller.style.left = `${this.rightBorder}px`
            return
        }
        if (rollerPosition <= this.leftBorder) {
            this.roller.style.left = `0px`
            return
        }
        this.roller.style.left = `${rollerPosition}px`
    }
}

let slider = new Slider({element: <HTMLElement>document.querySelector('.slider')})
