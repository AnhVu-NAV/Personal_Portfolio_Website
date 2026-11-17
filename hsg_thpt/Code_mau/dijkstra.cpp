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

int main(){
    ios::sync_with_stdio(false);cin.tie(nullptr);
    int n,m;cin>>n>>m;vector<vector<pair<int,ll>>>g(n+1);
    for(int i=0;i<m;i++){int u,v;ll w;cin>>u>>v>>w;g[u].push_back({v,w});g[v].push_back({u,w});}
    const ll INF=(1LL<<62);vector<ll>d(n+1,INF);d[1]=0;
    priority_queue<pair<ll,int>,vector<pair<ll,int>>,greater<pair<ll,int>>>pq;pq.push({0,1});
    while(!pq.empty()){
        auto [du,u]=pq.top();pq.pop();if(du!=d[u])continue;
        for(auto [v,w]:g[u])if(du+w<d[v]){d[v]=du+w;pq.push({d[v],v});}
    }
    cout<<(d[n]==INF?-1:d[n])<<'\n';
}
