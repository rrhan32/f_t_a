from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict
import networkx as nx  # install with: pip install networkx

app = FastAPI()

# Allow frontend to talk to backend (adjust origin in prod)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow all for dev
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models for validation
class Node(BaseModel):
    id: str

class Edge(BaseModel):
    source: str
    target: str

class PipelineRequest(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

@app.post("/pipelines/parse")
async def parse_pipeline(payload: PipelineRequest):
    num_nodes = len(payload.nodes)
    num_edges = len(payload.edges)

    # Build graph using networkx
    G = nx.DiGraph()
    for node in payload.nodes:
        G.add_node(node.id)

    for edge in payload.edges:
        G.add_edge(edge.source, edge.target)

    is_dag = nx.is_directed_acyclic_graph(G)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}