module.exports = {
  verbose: true,
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  moduleFileExtensions: [ "js", "jsx"],
  moduleNameMapper: {
    "^dnd-core$": "dnd-core/dist/cjs",
    "^react-dnd$": "react-dnd/dist/cjs",
    "^react-dnd-html5-backend$": "html5-backend/dist/cjs",
  },
  testURL: 'https://localhost:8082',
  coverageReporters: ['json', 'lcov', 'text'],
};
