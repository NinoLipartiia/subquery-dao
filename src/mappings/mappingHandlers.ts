import { Vote, Propose, Execute, Close, UpdateConfig,
  AddProposalHook, RemoveProposalHook, AddVoteHook, RemoveVoteHook } from "../types";
import { CosmosMessage } from "@subql/types-cosmos";
import { MsgVote, MsgPropose, MsgExecute, MsgClose, MsgUpdateConfig,
  MsgAddProposalHook, MsgRemoveProposalHook, MsgAddVoteHook, MsgRemoveVoteHook } from './msgTypes'

export async function handlePropose(
  message: CosmosMessage<{ sender: string; msg: MsgPropose }>
): Promise<void> {
  //JSON.stringify(message);
  const ProposeRecord = Propose.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    sender: message.msg.decodedMsg.sender,
    title: message.msg.decodedMsg.msg.propose.title,
    description: message.msg.decodedMsg.msg.propose.description,
    msgs: JSON.stringify(message.msg.decodedMsg.msg.propose.msgs),
  });
  await ProposeRecord.save();
}

export async function handleVote(
  message: CosmosMessage<{ sender: string; msg: MsgVote }>
): Promise<void> {
  const VoteRecord = Vote.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    sender: message.msg.decodedMsg.sender,
    proposalId: message.msg.decodedMsg.msg.vote.proposal_id,
    vote: message.msg.decodedMsg.msg.vote.vote,
  });
  await VoteRecord.save();
}

export async function handleExecute(
  message: CosmosMessage<{ sender: string; msg: MsgExecute }>
): Promise<void> {
  const ExecuteRecord = Execute.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    sender: message.msg.decodedMsg.sender,
    proposalId: message.msg.decodedMsg.msg.execute.proposal_id,
  });
  await ExecuteRecord.save();
}

export async function handleClose(
  message: CosmosMessage<{ sender: string; msg: MsgClose }>
): Promise<void> {
  const CloseRecord = Close.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    sender: message.msg.decodedMsg.sender,
    proposalId: message.msg.decodedMsg.msg.close.proposal_id,
  });
  await CloseRecord.save();
}

export async function handleUpdateConfig(
  message: CosmosMessage<{ sender: string; msg: MsgUpdateConfig }>
): Promise<void> {
  const UpdateConfigRecord = UpdateConfig.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    sender: message.msg.decodedMsg.sender,
  });
  await UpdateConfigRecord.save();
}

export async function handleAddProposalHook(
  message: CosmosMessage<{ sender: string; msg: MsgAddProposalHook }>
): Promise<void> {
  const AddProposalHookRecord = AddProposalHook.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    sender: message.msg.decodedMsg.sender,
    address: message.msg.decodedMsg.msg.add_proposal_hook.address,
  });
  await AddProposalHookRecord.save();
}

export async function handleRemoveProposalHook(
  message: CosmosMessage<{ sender: string; msg: MsgRemoveProposalHook }>
): Promise<void> {
  const RemoveProposalHookRecord = RemoveProposalHook.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    sender: message.msg.decodedMsg.sender,
    address: message.msg.decodedMsg.msg.remove_proposal_hook.address,
  });
  await RemoveProposalHookRecord.save();
}

export async function handleAddVoteHook(
  message: CosmosMessage<{ sender: string; msg: MsgAddVoteHook }>
): Promise<void> {
  const AddVoteHookRecord = AddVoteHook.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    sender: message.msg.decodedMsg.sender,
    address: message.msg.decodedMsg.msg.add_vote_hook.address,
  });
  await AddVoteHookRecord.save();
}

export async function handleRemoveVoteHook(
  message: CosmosMessage<{ sender: string; msg: MsgRemoveVoteHook }>
): Promise<void> {
  const RemoveVoteHookRecord = RemoveVoteHook.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    sender: message.msg.decodedMsg.sender,
    address: message.msg.decodedMsg.msg.remove_vote_hook.address,
  });
  await RemoveVoteHookRecord.save();
}
