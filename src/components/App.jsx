import React from 'react';
import { GamePage } from './GamePage.jsx';
import { ResultsPage } from './ResultsPage.jsx';
import { InitialPage } from './InitialPage.jsx';
import { AppRoute } from '../settings.js';


function App({results, getImages }) {
      const [page, setPage] = React.useState(AppRoute.Initial);
      const [result, setResult] = React.useState(0);
      const [images, setImages] = React.useState([]);
      const [gameType, setGameType] = React.useState(null);

      const handleStart = (type) => {
        const images = getImages(type); 
        setGameType(type);
        setImages(images);
        setPage(AppRoute.Game)
      }

      const showResults = (stepsCount) => {
        setResult(stepsCount);
        setPage(AppRoute.Results);
      };
      const handleReset = () => {
        setPage(AppRoute.Initial);
      };
      const getPage = (route) => {
        switch (route) {
          case AppRoute.Game:
            return <GamePage images={images} onShowResults={showResults} gameType={gameType} />;
          case AppRoute.Results:
            return (
              <ResultsPage
                stepsCount={result}
                onResetGame={handleReset}
                results={results}
              />
            );
          default:
            return (
              <InitialPage onStart={handleStart} />
            )
        }
      };
      return getPage(page);
    }

    export const useGame = (images) => {
      const [finishedItems, setFinishedItems] = React.useState([]);
      const [stepsCount, setStepsCount] = React.useState(0);

      const checkItems = (firstItem, secondItem) => {
        const firstImage = images.find(({id}) => id === firstItem);
        const secondImage = images.find(({id}) => id === secondItem);
        if (firstImage.url === secondImage.url) {
          setFinishedItems((items) => [...items, firstItem, secondItem]);
        }
        setStepsCount((i) => i + 1);
      };

      const isWin = finishedItems.length > 0 && finishedItems.length === images.length;

      return {
        finishedItems,
        stepsCount,
        checkItems,
        isWin
      };
    };

    export default App;