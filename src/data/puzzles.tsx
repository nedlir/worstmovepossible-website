export const puzzles = [
  {
    id: "000hf",
    fen: "r1bqk2r/pp1nbNp1/2p1p2p/8/2BP4/1PN3P1/P3QP1P/3R1RK1 b kq - 0 19",
    moves: ["e8f7"],
    makeFirstMove: false,
    move_sequence: ["e2e6", "f7f8", "e6f7"],
    description: "Moving the king leads to a mate in 2.",
  },
  {
    id: "000qP",
    fen: "8/7R/8/5p2/4bk1P/8/2r2K2/6R1 w - - 7 51",
    moves: ["f2f1"],
    makeFirstMove: false,
    move_sequence: ["f4f3", "f1e1", "c2c1", "e1d2", "c1g1"],
    description: "Moving the king allows Black to gain a decisive advantage.",
  },
  {
    id: "0018S",
    fen: "2kr3r/pp3p2/4p2p/1N1p2p1/3Q4/1P1P4/2q2PPP/5RK1 b - - 1 20",
    moves: ["c2c1"],
    makeFirstMove: false,
    move_sequence: ["f1c1", "c8d7", "c1c7", "d7e8", "d4h8"],
    description: "Moving the queen leads to a mate in 3.",
  },
  {
    id: "001h8",
    fen: "2r3k1/2r4p/4p1p1/1p1q1pP1/p1bP1P1Q/P6R/5B2/2R3K1 b - - 5 34",
    moves: ["c7c5"],
    makeFirstMove: false,
    move_sequence: ["h4h7", "g8f8", "h7h8", "f8e7", "h3h7"],
    description: "Moving the rook allows White to launch a decisive attack.",
  },
  {
    id: "001u3",
    fen: "2r3k1/p1q2pp1/Q3p2p/b1Np4/2nP1P2/4P1P1/5K1P/2B1N3 b - - 3 33",
    moves: ["c7e5"],
    makeFirstMove: false,
    move_sequence: ["a6c8", "g8h7", "d4e5", "c4b6", "c8a6"],
    description: "Moving the queen allows White to gain a winning advantage.",
  },
  {
    id: "001xl",
    fen: "8/4R1k1/p5pp/3B4/5q2/8/5P1P/6K1 b - - 5 40",
    moves: ["f4f7"],
    makeFirstMove: false,
    move_sequence: ["e7f7", "g7h8", "f7b7", "g6g5", "g1g2"],
    description: "Taking the rook leads to a losing endgame.",
  },
  {
    id: "002Cw",
    fen: "r7/2p2r1k/p2p1q1p/Pp1P4/1P2P3/2PQ4/6R1/R5K1 b - - 2 28",
    moves: ["f6h8"],
    makeFirstMove: false,
    move_sequence: ["e4e5", "f7f5", "d3f5"],
    description: "Moving the queen allows a mate in 2.",
  },
  {
    id: "002Uy",
    fen: "8/8/1p6/k7/P1R5/1K5r/8/8 w - - 26 64",
    moves: ["c4c3"],
    makeFirstMove: false,
    move_sequence: ["h3c3", "b3c3", "a5a4", "c3c2", "a4a3"],
    description: "Moving the rook allows Black to win the endgame.",
  },
  {
    id: "002rd",
    fen: "r6k/q1pb1p1p/1b3Pr1/p1ppP2Q/3P2p1/4B3/PP2NRPP/3R2K1 b - - 1 25",
    moves: ["g6g7"],
    makeFirstMove: false,
    move_sequence: ["f6g7", "h8g7", "f2f7", "g7h8", "h5h7"],
    description: "Moving the rook leads to a mate in 3.",
  },
  {
    id: "003eP",
    fen: "8/r1b1q2k/2p3p1/2Pp4/1P2p1n1/2B1P3/NQ6/2K4R b - - 1 36",
    moves: ["e7h4"],
    makeFirstMove: false,
    move_sequence: ["h1h4", "h7g8", "h4g4", "d5d4", "b2b3"],
    description: "Moving the queen allows White to gain a decisive advantage.",
  },
  {
    id: "003jH",
    fen: "rn3rk1/p5pp/3N4/4np1q/5Q2/1P3K2/PB1P2P1/2R4R w - - 0 25",
    moves: ["f3f2"],
    makeFirstMove: false,
    move_sequence: ["e5d3", "f2g1", "d3f4", "h1h5", "f4h5"],
    description: "Moving the king allows a devastating knight fork.",
  },
  {
    id: "0042j",
    fen: "3r2k1/4nppp/pq1p1b2/1p2P3/2r2P2/2P1NR2/PP1Q2BP/3R2K1 b - - 0 24",
    moves: ["d6e5"],
    makeFirstMove: false,
    move_sequence: ["d2d8", "b6d8", "d1d8"],
    description: "Taking the pawn leads to a quick mate in 2.",
  },
  {
    id: "004Ax",
    fen: "8/8/4R1kp/p7/5rPK/8/7P/8 b - - 2 42",
    moves: ["g6f7"],
    makeFirstMove: false,
    move_sequence: ["e6h6", "f4d4", "h6a6", "d4d8", "a6a5"],
    description: "Moving the king allows White to dominate with the rook.",
  },
  {
    id: "004RF",
    fen: "5rk1/5ppp/1p6/1qp2P1Q/3p3P/6R1/6PK/8 b - - 0 30",
    moves: ["g7g5"],
    makeFirstMove: false,
    move_sequence: ["h5g5", "g8h8", "g5f6"],
    description: "Opening the g-file leads to a quick mate in 2.",
  },
  {
    id: "005f3",
    fen: "r5k1/2p1pp2/pp4p1/1q1r4/5P2/2QP2R1/PP6/1K4R1 b - - 0 32",
    moves: ["g8f8"],
    makeFirstMove: false,
    move_sequence: ["c3h8"],
    description: "Moving the king allows an immediate mate with the queen.",
  },
  {
    id: "005nD",
    fen: "3rk2r/2qn1pp1/p1Q1R3/3n3p/8/8/PP4PP/5R1K b k - 0 23",
    moves: ["f7e6"],
    makeFirstMove: false,
    move_sequence: ["c6e6", "d5e7", "e6f7"],
    description: "Taking the pawn leads to a mate in 2 with the queen.",
  },
  {
    id: "009uB",
    fen: "3br2r/5k1p/4p1pQ/P5P1/1B5P/P6q/5R2/6K1 b - - 1 35",
    moves: ["f7g8"],
    makeFirstMove: false,
    move_sequence: ["f2f8", "e8f8", "h6f8"],
    description:
      "King seeks shelter in the corner, finds a mating net instead.",
  },
  {
    id: "00AGs",
    fen: "rn2k2Q/5p2/2p1p1r1/1q4p1/8/8/4NPPP/3R1K1R b q - 5 23",
    moves: ["e8e7"],
    makeFirstMove: false,
    move_sequence: ["h8d8"],
    description: "King takes a casual stroll, walks right into checkmate!",
  },
  {
    id: "00Ac7",
    fen: "8/2p1pk1p/Pp4p1/8/p1P2P2/3r2P1/3PR2P/3K4 b - - 1 33",
    moves: ["d3d2"],
    makeFirstMove: false,
    move_sequence: ["e2d2", "c7c6", "a6a7", "h7h5", "a7a8q"],
    description: "Rook captures with pride, pawn promotes with prejudice!",
  },
  {
    id: "00AdI",
    fen: "3r4/4kp1p/1PQ1p1p1/p3b3/1p2P2P/1P6/6PK/8 w - - 1 36",
    moves: ["h2h3"],
    makeFirstMove: false,
    move_sequence: ["d8d3", "g2g3", "d3g3", "h3h2", "g3c3"],
    description: "King seeks fresh air, finds a tactical thunderstorm.",
  },
  {
    id: "00AoZ",
    fen: "8/1R6/p1pk4/6bp/1QP5/P7/KP6/3r2q1 b - - 2 44",
    moves: ["g1c5"],
    makeFirstMove: false,
    move_sequence: ["b7d7", "d6d7", "b4c5", "g5d8", "c5h5"],
    description: "Queen goes shopping on c5, ends up paying with position.",
  },
  {
    id: "00AuR",
    fen: "8/4bkp1/R6P/4p3/Pp2P3/1P1rB3/6P1/6K1 b - - 0 33",
    moves: ["f7e8"],
    makeFirstMove: false,
    move_sequence: ["h6h7", "d3d1", "g1h2", "d1d8", "h7h8q"],
    description: "King retreats to e8, pawn promotion party begins!",
  },
  {
    id: "00B3B",
    fen: "2K5/3P4/5b2/p1B5/P7/3k4/6p1/8 w - - 7 77",
    moves: ["c5d4"],
    makeFirstMove: false,
    move_sequence: ["d3d4", "d7d8q", "f6d8", "c8d8", "g2g1q"],
    description: "Bishop moves to block, but Black's pawn has other plans!",
  },
  {
    id: "00Bg4",
    fen: "3r2k1/1q3ppp/p2rp3/Qp1B4/7P/P4P2/1PP3P1/1K1R3R b - - 0 21",
    moves: ["d6c6"],
    makeFirstMove: false,
    move_sequence: ["a5d8"],
    description: "Rook slides to c6, queen delivers instant checkmate!",
  },
  {
    id: "00CBU",
    fen: "8/2pR2kp/pb4p1/8/5p1P/B6K/P1r5/6r1 b - - 3 39",
    moves: ["g7h6"],
    makeFirstMove: false,
    move_sequence: ["a3f8", "h6h5", "d7h7"],
    description: "King flees to h6, bishop and rook say 'checkmate'!",
  },
  {
    id: "00CMj",
    fen: "7R/8/8/6p1/2p1p1k1/2PbK2p/P7/8 w - - 4 71",
    moves: ["h8h3"],
    makeFirstMove: false,
    move_sequence: ["g4h3", "e3d4", "g5g4", "d4d5", "e4e3"],
    description: "Rook tries to be a hero, becomes a cautionary tale.",
  },
  {
    id: "005xu",
    fen: "8/3k4/1K1P4/2P3r1/R7/5b2/8/8 b - - 0 68",
    moves: ["d7c8"],
    makeFirstMove: false,
    move_sequence: ["c5c6", "f3c6", "b6c6", "c8b8", "a4b4"],
    description:
      "King sneaks to c8, but White's pawns and rook have other plans!",
  },
  {
    id: "005yO",
    fen: "r1r3k1/ppq3bQ/4p2p/4n3/3p4/2P5/PBB2PPP/4R1K1 b - - 2 24",
    moves: ["g8f8"],
    makeFirstMove: false,
    move_sequence: ["b2a3", "f8f7", "c2d1", "c7c3", "d1h5"],
    description: "King seeks shelter on f8, finds a tactical storm instead!",
  },
  {
    id: "006XF",
    fen: "r5kr/pp1qb1p1/2p4p/3pPb1Q/3P4/2P1B3/PP4PP/R4RK1 b - - 1 17",
    moves: ["f5h7"],
    makeFirstMove: false,
    move_sequence: ["h5f7"],
    description: "Bishop to h7? More like 'Goodbye queen, hello checkmate!'",
  },
  {
    id: "006eO",
    fen: "8/8/2p2k2/1p1p4/3P4/1PP1pK2/8/8 b - - 3 64",
    moves: ["c6c5"],
    makeFirstMove: false,
    move_sequence: ["d4c5", "f6e5", "f3e3", "d5d4", "c3d4"],
    description:
      "Pawn advances boldly, White's pawns roll through mercilessly!",
  },
  {
    id: "006yP",
    fen: "6R1/8/Kpk1p3/1p1pP3/6P1/PPP1r3/8/8 b - - 3 40",
    moves: ["c6c5"],
    makeFirstMove: false,
    move_sequence: ["g8c8"],
    description: "One pawn move, one rook slide, instant checkmate!",
  },
  {
    id: "00761",
    fen: "3r2k1/1b3pbR/p2P2P1/3p2N1/2p5/2P2N2/PP6/2K5 b - - 0 28",
    moves: ["g7f8"],
    makeFirstMove: false,
    move_sequence: ["g6f7"],
    description: "Bishop retreats to f8, pawn delivers the final blow!",
  },
  {
    id: "0078T",
    fen: "rk5r/1b3R2/pp2p2q/4P2p/B2p3B/4R2P/PP4P1/5Q1K b - - 0 27",
    moves: ["b8c8"],
    makeFirstMove: false,
    move_sequence: ["f1c4", "b7c6", "c4c6", "c8b8", "f7b7"],
    description: "King slides to c8, White's pieces coordinate for mate!",
  },
  {
    id: "007AS",
    fen: "r3kb1r/3nnpp1/4p1bp/1NppP3/3P4/6N1/P2BBPPP/R3K2R b KQkq - 0 17",
    moves: ["a8d8"],
    makeFirstMove: false,
    move_sequence: ["b5d6"],
    description: "Rook relocates to d8, knight says 'Checkmate!'",
  },
  {
    id: "007ku",
    fen: "r1bq3Q/1np2kp1/p5B1/1p1Pp3/1Pn2BP1/2b2P2/P3K3/R4N2 b - - 5 35",
    moves: ["f7g6"],
    makeFirstMove: false,
    move_sequence: ["h8h5", "g6f6", "f4g5"],
    description: "King flees to g6, queen and bishop team up for mate!",
  },
  {
    id: "008GK",
    fen: "1k1r4/ppp3p1/8/1P5p/8/P3n2P/2P1r1P1/B3NRK1 b - - 4 31",
    moves: ["d8f8"],
    makeFirstMove: false,
    move_sequence: ["f1f8"],
    description: "Rook to f8? White's rook says 'Thanks for the mate!'",
  },
  {
    id: "008lc",
    fen: "7k/pb1qn2n/1p2R2Q/2p2p2/2Pp4/3B4/PP3PrP/4RK2 b - - 1 27",
    moves: ["f5f4"],
    makeFirstMove: false,
    move_sequence: ["h6h7"],
    description: "Pawn push to f4, queen delivers instant mate on h7!",
  },
  {
    id: "008o6",
    fen: "Q5k1/p1p3p1/5rP1/8/3P4/7P/q3r3/B4RK1 b - - 1 34",
    moves: ["f6f8"],
    makeFirstMove: false,
    move_sequence: ["f1f8"],
    description: "Rook blocks on f8, White's rook claims the game!",
  },
  {
    id: "008oX",
    fen: "4r1k1/2R3pp/2p4q/1p1p4/3P4/P7/1PP2R2/1K1N4 b - - 3 32",
    moves: ["e8c8"],
    makeFirstMove: false,
    move_sequence: ["c7c8"],
    description: "Rook captures rook, but it's actually a self-mate!",
  },
  {
    id: "0092V",
    fen: "r2qk1nr/ppp3pp/2n5/1B1pp3/1b1P4/5Q1P/PP1B1PP1/RN2K2R b KQkq - 3 11",
    moves: ["b7b6"],
    makeFirstMove: false,
    move_sequence: ["b5c6", "e8e7", "d2b4", "e7e6", "b1c3"],
    description: "Pawn advances to b6, White's pieces swarm in for the kill!",
  },
  {
    id: "0092z",
    fen: "2r3k1/2qR1ppp/p7/2p2Q2/P7/7P/5PP1/6K1 b - - 3 26",
    moves: ["g8f8"],
    makeFirstMove: false,
    move_sequence: ["f5f7"],
    description: "King steps to f8, queen delivers the finishing touch!",
  },
  {
    id: "009De",
    fen: "r1q4r/2p1kP2/3p4/2pPp3/p1P1Pb2/P1NB3b/1P3KP1/R2Q1R2 w - - 1 23",
    moves: ["d1e1"],
    makeFirstMove: false,
    move_sequence: ["c8g4", "e1e3", "h3g2", "f1g1", "f4e3"],
    description:
      "Queen slides to e1, Black's pieces launch a devastating attack!",
  },
  {
    id: "009IO",
    fen: "3rk3/5p1r/p2Np1p1/3bP3/P2n4/8/1P3RPP/5RK1 b - - 4 25",
    moves: ["e8e7"],
    makeFirstMove: false,
    move_sequence: ["f2f7", "h7f7", "f1f7"],
    description: "King escapes to e7, but the rooks have other ideas!",
  },
  {
    id: "009bR",
    fen: "4r2k/3q2r1/1p4pQ/p1pP4/2P4P/1N4p1/PP3RK1/8 b - - 1 37",
    moves: ["g7h7"],
    makeFirstMove: false,
    move_sequence: ["f2f8", "e8f8", "h6f8"],
    description: "Rook retreats to h7, White's rook and queen seal the deal!",
  },
];
