# danceChoreographises

## Goal

Build a platform to attach notes to choreographies

## Backend

The backend is realized with `reindex.io`, the schema is in `/reindex/ReindexSchema.json`.

## Frontend

TBD, most likely Relay + React


## Schema

Definition at `/reindex/ReindexSchema.json`.

### Queries

#### Query

```
{
	viewer {
    allDances {
      count,
      nodes {
        id
        name
      }
    }
    allNotes {
      count
      nodes {
				id
      }
  	}
  }
}
```

#### Mutation

```
mutation addDance($dance: _CreateDanceInput!) {
  createDance(input: $dance) {
    changedDance {
      id 
      name
    }
  }
}
```
