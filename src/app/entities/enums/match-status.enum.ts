export enum MatchStatus
{
    // When match not started yet (just scheduled)
    UNSTARTED = 1,

    // When match is playing in each of Sets
    ONGOING = 2,

    // When match stoped between Sets
    HALTING = 3,

    // When match successfully finished
    FINISHED = 4,

    // When match canceled before starting
    CANSELED = 5,

    // When match finished unsuccessfull
    ABNORMAL = 6,

    // When match goes to timeout in a Set's duration
    TIMEOUT = 7,
}
