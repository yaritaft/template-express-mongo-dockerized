# How to run empty database
```bash
chmod 711 up.sh
./up.sh
```

# Warning
You may have to access with Mongo Compass and create the database and collection manually. TODO: Review how to do this automatically.

# Warning
If you have some other service on port: 3000 or 27017 you will have issues because with Node or Mongo respectively.

# How to run app
```typescript
npx ts-node app.ts or npx nodemon app.ts
```

# How to build the app (OPTIONAL because ts node already does that)
```typescript
npx tsc
```