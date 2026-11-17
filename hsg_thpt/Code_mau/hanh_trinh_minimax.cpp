#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <queue>
#include <map>
#include <unordered_map>
#include <set>
#include <numeric>
#include <limits>
#include <tuple>
#include <array>
#include <stack>
#include <deque>
#include <cstdint>
#include <cmath>
#include <functional>
#include <iomanip>
#include <sstream>
using namespace std;
using ll = long long;

struct Edge{int v,id;ll w;};
int main(){
    ios::sync_with_stdio(false);cin.tie(nullptr);
    int n,m;cin>>n>>m;vector<ll>h(n+1);for(int i=1;i<=n;i++)cin>>h[i];
    vector<vector<Edge>>g(n+1);
    for(int i=1;i<=m;i++){int u,v;cin>>u>>v;ll w=abs(h[u]-h[v]);
        g[u].push_back({v,i,w});g[v].push_back({u,i,w});}
    const ll INF=(1LL<<62);vector<ll>d(n+1,INF);vector<int>par(n+1,-1),eid(n+1,-1);
    priority_queue<pair<ll,int>,vector<pair<ll,int>>,greater<pair<ll,int>>>pq;
    d[1]=0;pq.push({0,1});
    while(!pq.empty()){
        auto [du,u]=pq.top();pq.pop();if(du!=d[u])continue;
        for(auto e:g[u]){ll nd=max(du,e.w);if(nd<d[e.v]){
            d[e.v]=nd;par[e.v]=u;eid[e.v]=e.id;pq.push({nd,e.v});}}
    }
    if(d[n]==INF){cout<<-1<<'\n';return 0;}
    vector<int>path;for(int v=n;v!=1;v=par[v])path.push_back(eid[v]);reverse(path.begin(),path.end());
    cout<<d[n]<<'\n';for(size_t i=0;i<path.size();i++){if(i)cout<<' ';cout<<path[i];}cout<<'\n';
}
