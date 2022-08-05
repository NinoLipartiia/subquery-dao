export type MsgPropose = {
  propose: {
    title: string
    description: string
    msgs: string
  }
}
  
export type MsgVote = {
  vote: {
    proposal_id: bigint
    vote: string
  }
}
  
export type MsgExecute = {
  execute: {
    proposal_id: bigint
  }
}
  
export type MsgClose = {
  close: {
    proposal_id: bigint
  }
}
  
export type MsgUpdateConfig = {
  update_config: {}
}
  
export type MsgAddProposalHook = {
  add_proposal_hook: {
    address: string
  }
}

export type MsgRemoveProposalHook = {
  remove_proposal_hook: {
    address: string
  }
}
  
export type MsgAddVoteHook = {
  add_vote_hook: {
    address: string
  }
}
  
  
export type MsgRemoveVoteHook = {
  remove_vote_hook: {
    address: string
  }
}
