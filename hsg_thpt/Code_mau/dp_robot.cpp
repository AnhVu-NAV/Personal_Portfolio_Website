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
    int m,n,k;cin>>m>>n>>k;
    const ll NEG=-(1LL<<60);
    vector<ll>prev(n+2,NEG),cur(n+2,NEG);
    for(int i=1;i<=m;i++){
        fill(cur.begin(),cur.end(),NEG);
        for(int j=1;j<=n;j++){
            ll x;cin>>x;
            if(i==1){if(j==k)cur[j]=x;}
            else {ll best=max({prev[j-1],prev[j],prev[j+1]});if(best!=NEG)cur[j]=best+x;}
        }
        swap(prev,cur);
    }
    cout<<*max_element(prev.begin()+1,prev.begin()+n+1)<<'\n';
}
