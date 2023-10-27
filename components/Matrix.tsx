import React, { useEffect, useRef } from "react";

const MatrixPage: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvasTag: any = canvasRef.current;

        if (!canvasTag) return;

        function getWindowSize() {
            canvasTag.height = window.innerHeight;
            canvasTag.width = window.innerWidth;
        }

        function Load() {
            getWindowSize();

            const letter_size = 16; //letters size
            const columnsNumber = Math.ceil(canvasTag.width / letter_size); //Get the number of columns

            let letters = Array(columnsNumber).fill(1);
            let context = canvasTag.getContext('2d');//canvas

            function canvasCreator() {
                if (!context) return;

                context.fillStyle = "rgba(0,0,0,0.08)";//canvas background
                context.fillRect(0, 0, canvasTag.width, canvasTag.height);

                context.fillStyle = "#0f0";//letters color
                context.font = `${letter_size}px arial`;//letters font
                let text;
                let allText;
                for (let i = 0; i < letters.length; i++) {
                    text = Create_Word();
                    allText = text.split("");
                    context.fillText(allText.join(''), i * letter_size, letters[i] * letter_size);

                    if (letters[i] * letter_size > canvasTag.height && Math.random() > 0.975) {
                        letters[i] = 0;
                    }
                    letters[i]++;
                }
            }

            function Create_Word() {
                const numberText = Math.floor((Math.random() * 94) + 33);//Create char from code
                return String.fromCharCode(parseInt(numberText.toString()));//return char code
            }

            setInterval(canvasCreator, 80);//Timer
        }

        Load();
    }, []);

    useEffect(() => {
        function handleResize() {
            const canvasTag = canvasRef.current;
            if (!canvasTag) return;
            canvasTag.height = window.innerHeight;
            canvasTag.width = window.innerWidth;
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas ref={canvasRef} id="matrix_" />
    );
}

export default MatrixPage;
